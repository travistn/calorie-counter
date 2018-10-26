import React from 'react'
import CalorieForm from './calorie-budget'
import Grid from '@material-ui/core/Grid'
import { Card, CardTitle, Button } from 'reactstrap'

const styles = {
  icon: {
    color: '#78C1AD',
    cursor: 'pointer'
  }
}

export default class Home extends React.Component {
  render() {
    if (this.props.user === 0) {
      return (
        <CalorieForm onSubmit={this.props.onSubmit}/>
      )
    }
    if (this.props.user > 0) {
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          href="#home">
          <div className="mt-5">
            <p className="float-right">Goal: {this.props.goal} cal</p>
            <div className="text-center ml-5 mt-5">
              <Button color="primary" href='#add-food-item'>Add Food Item</Button>
            </div>
            <div className="text-center ml-5 mt-4">
              <Button color="primary" href="#list-of-food-items">View Food Items</Button>
            </div>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🥞</span> Breakfast
                <a href="#breakfast">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
            </Card>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🥪</span> Lunch
                <a href="#lunch">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
            </Card>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🥩</span> Dinner
                <a href="#dinner">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
            </Card>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🍪</span> Snacks
                <a href="#snacks">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
            </Card>
          </div>
        </Grid>
      )
    }
  }
}
