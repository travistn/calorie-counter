import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function DeleteMeal({ deleteOnSubmit, meals }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center">
      <div>
        <h2 className="mt-4">Delete a Meal</h2>
      </div>
      <Form className="text-center mt-5" onSubmit={() => deleteOnSubmit()}>
        <FormGroup>
          <Label>Select a meal:</Label>
          <Input type="select" className="shadow">
            <option></option>
            {
              meals.map((meal, index) => {
                return (
                  <option key={index}>
                    {meal.foodName + ' ' + meal.calories + ' cal'}
                  </option>
                )
              })
            }
          </Input>
        </FormGroup>
        <div>
          <Button color="primary" className="mt-3">Delete</Button>
        </div>
      </Form>
    </Grid>
  )
}
