import React from 'react'
import hash from './hash'
import Home from './home'

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
  renderView() {
    const { path } = this.state.view
    switch (path) {
      default:
        return <Home user={this.state.user.length} onSubmit={this.addBudget}/>
    }
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
      <div>
        {this.renderView()}
      </div>
    )
  }
}
