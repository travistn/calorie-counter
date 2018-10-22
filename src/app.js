import React from 'react'
import CalorieForm from './calorie-budget'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
    this.addBudget = this.addBudget.bind(this)
  }
  addBudget(newUser) {
    const user1 = Object.assign({}, newUser)
    const user = [...this.state.user, user1]
    this.setState({ user })
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(user => this.setState({ user }))
  }
  render() {
    return (
      <CalorieForm onSubmit={this.addBudget}/>
    )
  }
}
