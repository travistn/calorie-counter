import React from 'react'
import CalorieForm from './calorie-budget'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.addBudget = this.addBudget.bind(this)
  }
  addBudget(newUser) {
    const user = Object.assign({}, newUser)
    const users = [...this.state.users, user]
    this.setState({ users })
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const { user } = this.state
      const stateJson = JSON.stringify({ user })
      localStorage.setItem('calorie-app-state', stateJson)
    })
  }
  render() {
    return (
      <CalorieForm onSubmit={this.addBudget}/>
    )
  }
}
