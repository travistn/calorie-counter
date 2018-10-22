import React from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'

export default class CalorieForm extends React.Component {
  render() {
    return (
      <Container className="d-flex justify-content-center">
        <Form>
          <h2>The basics</h2>
          <FormGroup>
            <Input
              name="weight"
              placeholder="Your weight"
              className="text-center"></Input>
          </FormGroup>
          <FormGroup>
            <Input
              name="calories"
              placeholder="Calorie budget per day"></Input>
          </FormGroup>
          <div className="text-center">
            <Button>Let's get started!</Button>
          </div>
        </Form>
      </Container>
    )
  }
}
