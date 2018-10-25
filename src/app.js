import React from 'react'
import hash from './hash'
import Home from './home'
import FoodItem from './food-item'
import FoodItemsList from './view-food-items'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    this.state = {
      user: [],
      foodItems: [],
      view: path
    }
    this.addBudget = this.addBudget.bind(this)
    this.addFoodItem = this.addFoodItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  addBudget(newUser) {
    const req = {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch('/users', req)
      .then(res => res.json())
      .then(addedUser => this.setState({
        user: [...this.state.user, addedUser]
      }))
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
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }
    return fetch(`/food-items/${item.id}`, req)
      .then(res => res.json())
      .then(foodItem => {
        const foodItems = this.state.foodItems.map(item =>
          item.id === foodItems.id
            ? foodItem
            : item
        )
        this.setState({ foodItems })
      })
  }
  renderView() {
    const { path } = this.state.view
    switch (path) {
      case 'add-food-item':
        return <FoodItem onSubmit={this.addFoodItem}/>
      case 'list-of-food-items':
        return <FoodItemsList foodList={this.state.foodItems} deleteOnClick={this.deleteItem}/>
      default:
        const user = this.state.user.map(user => user.calorieGoal)
        return <Home user={this.state.user.length} onSubmit={this.addBudget} goal={user}/>
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: {path}
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
