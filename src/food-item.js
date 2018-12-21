import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Button } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import axios from 'axios'
import Select from 'react-select'

export default class FoodItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      calories: '',
      results: [],
      suggestions: [],
      selectedOption: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getFoodItem = this.getFoodItem.bind(this)
    this.handleFoodChange = this.handleFoodChange.bind(this)
  }
  handleChange(event) {
    const form = event.target
    this.setState({
      [form.name]: form.value
    }, () => {
      if (this.state.foodName && this.state.foodName.length > 1) {
        if (this.state.foodName.length % 2 === 0) {
          this.getFoodItem()
        }
      }
    }
    )
  }
  handleSubmit(event) {
    event.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.onSubmit(user)
    event.target.reset()
  }
  handleFoodChange(selectedOption) {
    this.setState({foodName: selectedOption})
  }
  getFoodItem() {
    axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.foodName}`, {
      headers: {
        'x-app-id': '78710bc1',
        'x-app-key': '6198d4d14f69acc0e05e814d6bb55423'
      }
    })
      .then(res => {
        this.setState({ results: res.data.common })
      })
    axios.post(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '78710bc1',
        'x-app-key': '6198d4d14f69acc0e05e814d6bb55423',
        'x-remote-user-id': '0'
      },
      body: {
        'query': this.state.results.food_name,
        'locale': 'en_US'
      }
    })
  }
  render() {
    const { value } = this.state
    const foodItems = this.state.results.map(item => Object.assign({label: item.food_name}))
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
              onChange={this.handleChange}>
            </TextField>
            <Select options={foodItems} onChange={this.handleFoodChange} value={value} placeholder="Select a food item"/>
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
