import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import { Form, FormGroup, Button } from 'reactstrap'

const styles = {
  goal: {
    marginLeft: '2.2rem'
  }
}

export default class EditBudget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: this.props.weight,
      calorieGoal: this.props.goal
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
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <Form
          onSubmit={this.handleSubmit}
          className="mt-5">
          <h2 className="text-center">Edit the basics</h2>
          <FormGroup className="text-center mt-5">
            <TextField
              name="weight"
              label="Your weight"
              margin="normal"
              onChange={this.handleChange}
              value={this.state.weight}/>
            <FormHelperText style={styles.goal}>Required*</FormHelperText>
          </FormGroup>
          <FormGroup className="text-center">
            <TextField
              name="calorieGoal"
              label="Calories per day"
              margin="normal"
              type="number"
              onChange={this.handleChange}
              value={this.state.calorieGoal}/>
            <FormHelperText style={styles.goal}>Required*</FormHelperText>
          </FormGroup>
          <div className="mt-4 text-center">
            <Button color="secondary">Save</Button>
          </div>
        </Form>
      </Grid>
    )
  }
}
