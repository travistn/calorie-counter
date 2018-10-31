import React from 'react'
import DatePicker from './date'
import Grid from '@material-ui/core/Grid'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const styles = {
  font: {
    fontSize: '14px'
  },
  card: {
    width: '12rem'
  }
}

export default class History extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="mt-5"
        href="#history">
        <div>
          <h2 className="mt-4">View Your History</h2>
        </div>
        <div className="mt-4">
          <DatePicker/>
        </div>
        <div className="mt-3">
          {
            this.props.meals.map((meal, index) => {
              return (
                <Card className="m-4 shadow sm border-light" key={index} style={styles.card}>
                  <CardBody>
                    <CardTitle className="text-center text-secondary">{meal.mealType}</CardTitle>
                    <CardText className="mt-3" style={styles.font}>{meal.foodName}</CardText>
                    <CardText style={styles.font}>{meal.calories} cal</CardText>
                  </CardBody>
                </Card>
              )
            })
          }
        </div>
      </Grid>
    )
  }
}
