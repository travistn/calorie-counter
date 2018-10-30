import React from 'react'
import CalorieForm from './calorie-budget'
import Grid from '@material-ui/core/Grid'
import { Card, CardTitle, CardText, Button } from 'reactstrap'
import StyledProgressbar from './styled-progress-bar'
import { relative } from 'path';

const styles = {
  icon: {
    color: '#78C1AD',
    cursor: 'pointer'
  },
  cardText: {
    fontSize: '13px'
  },
  trashIcon: {
    color: '#78C1AD',
    cursor: 'pointer',
    fontSize: '15px'
  },
  circle: {
    width: '85%'
  },
  calories: {
    position: 'relative',
    bottom: '4rem',
    left: '3.7rem'
  },
  caloriesConsumed: {
    position: 'relative',
    left: '1rem'
  },
  goal: {
    position: 'relative',
    left: '5rem'
  }
}

export default class Home extends React.Component {
  render() {
    let caloriesConsumed = this.props.meals.map(meal => meal.calories)
    caloriesConsumed = caloriesConsumed.reduce((a, b) => a + b, 0)
    const calorieDifference = this.props.goal - caloriesConsumed
    const caloriePercentage = (caloriesConsumed / this.props.goal) * 100
    if (this.props.user === 0) {
      return (
        <CalorieForm onSubmit={this.props.onSubmit}/>
      )
    }
    if (this.props.user > 0) {
      const breakfast = this.props.meals.filter(item => item.mealType === 'breakfast')
      const deleteBreakfast = this.props.meals.find(item => item.mealType === 'breakfast')
      let breakfastFood = breakfast.map(item => item.foodName)
      if (breakfastFood.length > 1) {
        breakfastFood = breakfastFood.join(', ')
      }
      let breakfastCal = breakfast.map(item => item.calories)
      breakfastCal = breakfastCal.reduce((a, b) => a + b, 0)

      const lunch = this.props.meals.filter(item => item.mealType === 'lunch')
      const deleteLunch = this.props.meals.find(item => item.mealType === 'lunch')
      let lunchFood = lunch.map(item => item.foodName)
      if (lunchFood.length > 1) {
        lunchFood = lunchFood.join(', ')
      }
      let lunchCal = lunch.map(item => item.calories)
      lunchCal = lunchCal.reduce((a, b) => a + b, 0)

      const dinner = this.props.meals.filter(item => item.mealType === 'dinner')
      const deleteDinner = this.props.meals.find(item => item.mealType === 'dinner')
      let dinnerFood = dinner.map(item => item.foodName)
      if (dinnerFood.length > 1) {
        dinnerFood = dinnerFood.join(', ')
      }
      let dinnerCal = dinner.map(item => item.calories)
      dinnerCal = dinnerCal.reduce((a, b) => a + b, 0)

      const snacks = this.props.meals.filter(item => item.mealType === 'snacks')
      const deleteSnack = this.props.meals.find(item => item.mealType === 'snacks')
      let snackFood = snacks.map(item => item.foodName)
      if (snackFood.length > 1) {
        snackFood = snackFood.join(', ')
      }
      let snackCal = snacks.map(item => item.calories)
      snackCal = snackCal.reduce((a, b) => a + b, 0)
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          href="#home">
          <div className="mt-5">
            <span className="float-right" style={styles.goal}>Goal: {this.props.goal} cal</span>
            <span className="w-25" style={styles.caloriesConsumed} >{`Eaten: ${caloriesConsumed}`}
            </span>
            <div style={styles.circle} className="ml-5 mt-4">
              <StyledProgressbar text={calorieDifference} percentage={caloriePercentage}/>
              <p style={styles.calories}>cals left</p>
            </div>
            <div className="text-center ml-5">
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
              <CardText className="mt-2" style={styles.cardText}>{breakfastFood}</CardText>
              <CardText style={styles.cardText}>Total: {breakfastCal} cal
                <span>
                  <i className="far fa-trash-alt float-right"
                    style={styles.trashIcon}
                    onClick={() => this.props.deleteOnClick(deleteBreakfast)}></i>
                </span>
              </CardText>
            </Card>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🥪</span> Lunch
                <a href="#lunch">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
              <CardText className="mt-2" style={styles.cardText}>{lunchFood}</CardText>
              <CardText style={styles.cardText}>Total: {lunchCal} cal
                <span>
                  <i className="far fa-trash-alt float-right"
                    style={styles.trashIcon}
                    onClick={() => this.props.deleteOnClick(deleteLunch)}></i>
                </span>
              </CardText>
            </Card>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🥩</span> Dinner
                <a href="#dinner">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
              <CardText className="mt-2" style={styles.cardText}>{dinnerFood}</CardText>
              <CardText style={styles.cardText}>Total: {dinnerCal} cal
                <span>
                  <i className="far fa-trash-alt float-right"
                    style={styles.trashIcon}
                    onClick={() => this.props.deleteOnClick(deleteDinner)}></i>
                </span>
              </CardText>
            </Card>
            <Card body className="shadow sm m-4 w-100">
              <CardTitle className="h6"><span className="mr-2">🍪</span> Snacks
                <a href="#snacks">
                  <i className="fa fa-plus-circle float-right" style={styles.icon}></i>
                </a>
              </CardTitle>
              <CardText className="mt-2" style={styles.cardText}>{snackFood}</CardText>
              <CardText style={styles.cardText}>Total: {snackCal} cal
                <span>
                  <i className="far fa-trash-alt float-right"
                    style={styles.trashIcon}
                    onClick={() => this.props.deleteOnClick(deleteSnack)}></i>
                </span>
              </CardText>
            </Card>
          </div>
        </Grid>
      )
    }
  }
}
