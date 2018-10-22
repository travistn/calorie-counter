import React from 'react'
import CalorieForm from './calorie-budget'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  render() {
    return (
      <CalorieForm/>
    )
  }
}
