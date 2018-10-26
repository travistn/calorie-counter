import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default class RecordMeal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      calories: '',
      servingSize: '',
      mealType: this.props.mealType
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const id = parseInt(event.target.value, 10)
    const foodItem = this.props.foodItems.find(item => item.id === id)
    const calorieProduct = this.state.servingSize * parseInt(foodItem.calories, 10)
    this.setState({
      foodName: foodItem.foodName,
      calories: calorieProduct,
      servingSize: parseInt(event.target.value)
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
          <h2 className="mt-4">Record Your Meal</h2>
        </div>
        <Form className="text-center mt-5" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Select a food item:</Label>
            <Input
              type="select"
              name="foodItem"
              className="shadow"
              onChange={this.handleChange}>
              {
                this.props.foodItems.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>{item.foodName + ' ' + item.calories + ' cal'}</option>
                  )
                })
              }
            </Input>
          </FormGroup>
          <FormGroup className="mt-5">
            <Label>How many servings?</Label>
            <Input
              type="text"
              name="servingSize"
              className="shadow"
              value={value}
              onChange={this.handleChange}>
            </Input>
          </FormGroup>
          <div>
            <Button color="primary" className="mt-3">Record</Button>
          </div>
        </Form>
      </Grid>
    )
  }
}
