import React from 'react'
import hash from './hash'
import CalorieForm from './calorie-budget'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    this.state = {
      user: [],
      view: path
    }
    this.addBudget = this.addBudget.bind(this)
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
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: path
      })
    })
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
