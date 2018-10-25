import React from 'react'
import hash from './hash'
import Home from './home'
import FoodItem from './food-item'

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
  renderView() {
    const { path } = this.state.view
    switch (path) {
      case 'add-food-item':
        return <FoodItem onSubmit={this.addFoodItem}/>
      case 'list-of-food-items':
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
