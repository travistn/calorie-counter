import React from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'

export default class CalorieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      calories: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const { value } = event.target
    this.setState({
      weight: value,
      calories: value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const user = Object.assign({}, this.state)
  }
  render() {
    const { value } = this.state
    return (
      <Container className="d-flex justify-content-center">
        <Form onSubmit={this.handleSubmit}>
          <h2>The basics</h2>
          <FormGroup>
            <Input
              name="weight"
              placeholder="Your weight"
              className="text-center"
              onChange={this.handleChange}
              value={value}></Input>
          </FormGroup>
          <FormGroup>
            <Input
              name="calories"
              placeholder="Calorie budget per day"
              className="text-center"
              onChange={this.handleChange}
              value={value}></Input>
          </FormGroup>
          <div className="text-center">
            <Button>Let's get started!</Button>
          </div>
        </Form>
      </Container>
    )
  }
}
