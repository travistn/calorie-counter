import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Button } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

export default class FoodItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      calories: '',
      mealType: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const form = event.target
    this.setState({
      [form.name]: form.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.onSubmit(user)
    event.target.reset()
  }
  render() {
    const { value } = this.state
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <div>
          <h2 className="mt-4">Add Food Item</h2>
        </div>
        <Form className="mt-2" onSubmit={this.handleSubmit}>
          <FormGroup>
            <TextField
              name="foodName"
              label="Food Name"
              className="w-100 text-center mt-4"
              value={value}
              onChange={this.handleChange}/>
          </FormGroup>
          <FormControl className="mt-4">
            <Input
              name="calories"
              value={value}
              onChange={this.handleChange}
              endAdornment={<InputAdornment position="start">calories/serving</InputAdornment>}/>
          </FormControl>
          <FormGroup className="mt-4 w-100">
            <InputLabel>Meal Type</InputLabel>
            <Select
              native
              className="w-100"
              name="mealType"
              value={value}
              onChange={this.handleChange}>
              <option value=""/>
              <option value={'breakfast'}>Breakfast</option>
              <option value={'lunch'}>Lunch</option>
              <option value={'dinner'}>Dinner</option>
              <option value={'snack'}>Snack</option>
            </Select>
          </FormGroup>
          <div className="mt-4 text-center">
            <Button color="primary">Save</Button>
          </div>
        </Form>
      </Grid>
    )
  }
}