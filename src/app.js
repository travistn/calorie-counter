import React from 'react'
import hash from './hash'
import Home from './home'
import FoodItem from './food-item'
import FoodItemsList from './view-food-items'
import EditFoodItem from './edit-food-item'
import RecordMeal from './record-meal'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const { path, params } = hash.parse(location.hash)
    this.state = {
      user: [],
      foodItems: [],
      meals: [],
      view: { path, params }
    }
    this.addBudget = this.addBudget.bind(this)
    this.addFoodItem = this.addFoodItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editFoodItem = this.editFoodItem.bind(this)
    this.recordMeal = this.recordMeal.bind(this)
  }
  addBudget(newUser) {
    const req = {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch('/users', req)
      .then(res => res.json())
      .then(addedUser => {
        this.setState({
          user: [...this.state.user, addedUser]
        })
        location.hash = '#home'
      })
  }
  addFoodItem(item) {
    const req = {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch('/food-items', req)
      .then(res => res.json())
      .then(item => this.setState({
        foodItems: [...this.state.foodItems, item]
      }))
  }
  deleteItem(deleted) {
    const req = {
      method: 'DELETE'
    }
    return fetch(`/food-items/${deleted.id}`, req)
      .then(() => {
        const foodItems = this.state.foodItems.filter(item =>
          item.id !== deleted.id
        )
        this.setState({ foodItems })
      })
  }
  editFoodItem(item) {
    const { params } = this.state.view
    const id = parseInt(params.id, 10)
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }
    return fetch(`/food-items/${id}`, req)
      .then(res => res.json())
      .then(foodItem => {
        const foodItems = this.state.foodItems.map(item =>
          item.id === foodItem.id
            ? foodItem
            : item
        )
        this.setState({ foodItems })
        location.hash = '#list-of-food-items'
      })
  }
  recordMeal(meal) {
    const req = {
      method: 'POST',
      body: JSON.stringify(meal),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch('/meals', req)
      .then(res => res.json())
      .then(meal => this.setState({
        meals: [...this.state.meals, meal]
      }))
  }
  renderView() {
    const { path, params } = this.state.view
    const { foodItems } = this.state
    switch (path) {
      case 'add-food-item':
        return <FoodItem onSubmit={this.addFoodItem}/>
      case 'list-of-food-items':
        return <FoodItemsList foodList={foodItems} deleteOnClick={this.deleteItem}/>
      case 'edit-food-item':
        const foodItem = foodItems.find(item => item.id === parseInt(params.id, 10))
        return <EditFoodItem item={foodItem} onSubmit={this.editFoodItem}/>
      case 'breakfast':
        return <RecordMeal foodItems={foodItems} mealType={'breakfast'} onSubmit={this.recordMeal}/>
      case 'lunch':
        return <RecordMeal foodItems={foodItems} mealType={'breakfast'} onSubmit={this.recordMeal}/>
      case 'dinner':
        return <RecordMeal foodItems={foodItems} mealType={'breakfast'} onSubmit={this.recordMeal}/>
      case 'snacks':
        return <RecordMeal foodItems={foodItems} mealType={'breakfast'} onSubmit={this.recordMeal}/>
      default:
        const user = this.state.user.map(user => user.calorieGoal)
        return <Home user={this.state.user.length} onSubmit={this.addBudget} goal={user}/>
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: {path, params}
      })
    })
    fetch('/users')
      .then(res => res.json())
      .then(user => this.setState({ user }))
    fetch('/food-items')
      .then(res => res.json())
      .then(item => this.setState({ foodItems: item }))
  }
  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}
