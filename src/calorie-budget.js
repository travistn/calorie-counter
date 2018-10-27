import React from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'

export default class CalorieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      calorieGoal: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const form = event.target
    this.setState({
      [form.name]: parseInt(form.value, 10)
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.onSubmit(user)
  }
  render() {
    const { value } = this.state
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <Form
          onSubmit={this.handleSubmit}
          className="mt-5">
          <h2 className="text-center">The basics</h2>
          <FormGroup>
            <TextField
              name="weight"
              label="Your weight"
              className="classes.textField mt-5"
              margin="normal"
              onChange={this.handleChange}
              value={value}/>
              <FormHelperText>Required*</FormHelperText>
          </FormGroup>
          <FormGroup>
            <TextField
              name="calorieGoal"
              label="Calories per day"
              className="classes.textField"
              margin="normal"
              type="number"
              onChange={this.handleChange}
              value={value}/>
            <FormHelperText>Required*</FormHelperText>
          </FormGroup>
          <div className="mt-4 w-100">
            <Button color="secondary">Let's get started!</Button>
          </div>
        </Form>
      </Grid>
    )
  }
}
