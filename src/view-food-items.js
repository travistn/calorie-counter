import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, CardBody, CardText } from 'reactstrap'

const styles = {
  font: {
    fontSize: '14px'
  }
}

export default function FoodItemsList({ foodList }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center">
      <h2 className="mt-4">List of Food Items</h2>
      {
        foodList.map((item, id) => {
          return (
            <Card className="m-4 shadow sm w-25 border-light" key={id}>
              <CardBody>
                <CardText className="text-center h6">{item.mealType}</CardText>
                <CardText className="mt-2" style={styles.font}>{item.foodName}</CardText>
                <CardText style={styles.font}>{item.calories} cal</CardText>
              </CardBody>
            </Card>
          )
        })
      }
    </Grid>
  )
}
