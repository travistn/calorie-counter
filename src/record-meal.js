import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default class RecordMeal extends React.Component {
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
        <Form className="text-center mt-5">
          <FormGroup>
            <Label>Select a food item:</Label>
            <Input type="select" name="foodItem" className="shadow">
              {
                this.props.foodItems.map((item, id) => {
                  return (
                    <option key={id}>{item.foodName + ' ' + item.calories + ' cal'}</option>
                  )
                })
              }
            </Input>
          </FormGroup>
          <FormGroup className="mt-5">
            <Label>How many servings?</Label>
            <Input type="select" name="servingSize" className="shadow">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
