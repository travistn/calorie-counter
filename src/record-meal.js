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
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const id = parseInt(event.target.value, 10)
    const foodItem = this.props.foodItems.find(item => item.id === id)
    this.setState({
      foodName: foodItem.foodName,
      calories: foodItem.calories
    })
  }
  handleInputChange(event) {
    this.setState({
      servingSize: parseInt(event.target.value, 10)
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const user = Object.assign({}, this.state,
      {calories: this.state.servingSize * parseInt(this.state.calories, 10)})
    this.props.onSubmit(user)
    event.target.reset()
  }
  render() {
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
              <option></option>
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
              onChange={this.handleInputChange}>
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
