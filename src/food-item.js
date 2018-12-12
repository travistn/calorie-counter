import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Button } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'

const key = 'appId=78710bc1&appKey=6198d4d14f69acc0e05e814d6bb55423'

export default class FoodItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      calories: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getFoodItem = this.getFoodItem.bind(this)
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
  getFoodItem(item) {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }
    return fetch(`https://api.nutritionix.com/v1_1/search/${this.state.foodName}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&${key}`, req)
      .then(res => res.json)
      .then(foodItem => {
        this.setState({ results: foodItem.data })
      })
  }
  render() {
    const { value } = this.state
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="mt-5">
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
          <div className="mt-4 text-center">
            <Button color="primary">Save</Button>
          </div>
        </Form>
      </Grid>
    )
  }
}
