import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'

const styles = {
  font: {
    fontSize: '14px'
  },
  card: {
    width: '12rem'
  }
}

export default class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: ''
    }
    this.handleDate = this.handleDate.bind(this)
  }
  handleDate(event) {
    this.setState({
      date: event.target.value
    })
    console.log(this.state.date)
  }
  render() {
    const { value } = this.state
    const date = this.state.date
    const mealsLog = this.props.meals.filter(meal => meal.date === date)
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
        <Form className="mt-4" onChange={this.handleDate}>
          <FormGroup>
            <Label>Date</Label>
            <Input type="date" name="date" value={value}></Input>
          </FormGroup>
        </Form>
        <div className="mt-3">
          {
            mealsLog.map((meal, index) => {
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
