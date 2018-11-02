import React from 'react'
import { Line } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Input } from 'reactstrap'

const moment = require('moment')
const today = moment().subtract(0, 'days').format('MM/DD')
const yesterday = moment().subtract(1, 'days').format('MM/DD')
const twoDays = moment().subtract(2, 'days').format('MM/DD')
const threeDays = moment().subtract(3, 'days').format('MM/DD')
const fourDays = moment().subtract(4, 'days').format('MM/DD')
const fiveDays = moment().subtract(5, 'days').format('MM/DD')
const sixDays = moment().subtract(6, 'days').format('MM/DD')
const sevenDays = moment().subtract(7, 'days').format('MM/DD')
const week = [sevenDays, sixDays, fiveDays, fourDays, threeDays, twoDays, yesterday, today]

const todayCalories = moment().subtract(0, 'days').format('YYYY-MM-DD')
const yesterdayCalories = moment().subtract(1, 'days').format('YYYY-MM-DD')
const twoDaysCalories = moment().subtract(2, 'days').format('YYYY-MM-DD')
const threeDaysCalories = moment().subtract(3, 'days').format('YYYY-MM-DD')
const fourDaysCalories = moment().subtract(4, 'days').format('YYYY-MM-DD')
const fiveDaysCalories = moment().subtract(5, 'days').format('YYYY-MM-DD')
const sixDaysCalories = moment().subtract(6, 'days').format('YYYY-MM-DD')
const sevenDaysCalories = moment().subtract(7, 'days').format('YYYY-MM-DD')

const thisMonth = moment().subtract(0, 'month').format('MMM/YY')
const lastMonth = moment().subtract(1, 'month').format('MMM/YY')
const twoMonthsAgo = moment().subtract(2, 'month').format('MMM/YY')
const month = [twoMonthsAgo, lastMonth, thisMonth]

const thisMonthCalories = moment().subtract(0, 'month').format('YYYY-MM')
const lastMonthCalories = moment().subtract(1, 'month').format('YYYY-MM')
const lastTwoMonthsCalories = moment().subtract(2, 'month').format('YYYY-MM')


export default class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'weeklyData'
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(event) {
    this.setState({
      view: event.target.value
    })
  }
  render() {
    const caloriesToday = this.props.meals.filter(meal => meal.date === todayCalories)
    let caloriesConsumedToday = caloriesToday.map(meal => meal.calories)
    caloriesConsumedToday = caloriesConsumedToday.reduce((a, b) => a + b, 0)

    const caloriesYesterday = this.props.meals.filter(meal => meal.date === yesterdayCalories)
    let caloriesConsumedYesterday = caloriesYesterday.map(meal => meal.calories)
    caloriesConsumedYesterday = caloriesConsumedYesterday.reduce((a, b) => a + b, 0)

    const caloriesTwoDays = this.props.meals.filter(meal => meal.date === twoDaysCalories)
    let caloriesConsumedTwoDays = caloriesTwoDays.map(meal => meal.calories)
    caloriesConsumedTwoDays = caloriesConsumedTwoDays.reduce((a, b) => a + b, 0)

    const caloriesThreeDays = this.props.meals.filter(meal => meal.date === threeDaysCalories)
    let caloriesConsumedThreeDays = caloriesThreeDays.map(meal => meal.calories)
    caloriesConsumedThreeDays = caloriesConsumedThreeDays.reduce((a, b) => a + b, 0)

    const caloriesFourDays = this.props.meals.filter(meal => meal.date === fourDaysCalories)
    let caloriesConsumedFourDays = caloriesFourDays.map(meal => meal.calories)
    caloriesConsumedFourDays = caloriesConsumedFourDays.reduce((a, b) => a + b, 0)

    const caloriesFiveDays = this.props.meals.filter(meal => meal.date === fiveDaysCalories)
    let caloriesConsumedFiveDays = caloriesFiveDays.map(meal => meal.calories)
    caloriesConsumedFiveDays = caloriesConsumedFiveDays.reduce((a, b) => a + b, 0)

    const caloriesSixDays = this.props.meals.filter(meal => meal.date === sixDaysCalories)
    let caloriesConsumedSixDays = caloriesSixDays.map(meal => meal.calories)
    caloriesConsumedSixDays = caloriesConsumedSixDays.reduce((a, b) => a + b, 0)

    const caloriesSevenDays = this.props.meals.filter(meal => meal.date === sevenDaysCalories)
    let caloriesConsumedSevenDays = caloriesSevenDays.map(meal => meal.calories)
    caloriesConsumedSevenDays = caloriesConsumedSevenDays.reduce((a, b) => a + b, 0)

    const weekly = [caloriesConsumedSevenDays, caloriesConsumedSixDays, caloriesConsumedFiveDays,
      caloriesConsumedFourDays, caloriesConsumedThreeDays, caloriesConsumedTwoDays, caloriesConsumedYesterday, caloriesConsumedToday]

    const caloriesLastMonth = this.props.meals.filter(meal => {
      if (meal.date.includes(lastMonthCalories)) {
        return meal.date
      }
    })
    let caloriesConsumedLastMonth = caloriesLastMonth.map(meal => meal.calories)
    caloriesConsumedLastMonth = caloriesConsumedLastMonth.reduce((a, b) => a + b, 0)

    const caloriesThisMonth = this.props.meals.filter(meal => {
      if (meal.date.includes(thisMonthCalories)) {
        return meal.date
      }
    })
    let caloriesConsumedThisMonth = caloriesThisMonth.map(meal => meal.calories)
    caloriesConsumedThisMonth = caloriesConsumedThisMonth.reduce((a, b) => a + b, 0)

    const caloriesLastTwoMonths = this.props.meals.filter(meal => {
      if (meal.date.includes(lastTwoMonthsCalories)) {
        return meal.date
      }
    })
    let caloriesConsumedLastTwoMonths = caloriesLastTwoMonths.map(meal => meal.calories)
    caloriesConsumedLastTwoMonths = caloriesConsumedLastTwoMonths.reduce((a, b) => a + b, 0)

    const monthly = [caloriesConsumedLastTwoMonths, caloriesConsumedLastMonth, caloriesConsumedThisMonth]

    let data = {
      weeklyData: {
        labels: week,
        datasets: [
          {
            label: 'Calories Consumed',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: weekly
          }
        ]
      },
      monthlyData: {
        labels: month,
        datasets: [
          {
            label: 'Calories Consumed',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: monthly
          }
        ]
      }
    }
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="mt-5">
        <div>
          <h2 className="mt-4">See Your Progress</h2>
        </div>
        <Form className="mt-4">
          <FormGroup>
            <Input type="select" onChange={this.handleToggle}>
              <option value={'weeklyData'}>Weekly</option>
              <option value={'monthlyData'}>Monthly</option>
            </Input>
          </FormGroup>
        </Form>
        <div className="mt-4">
          <Line data={data[this.state.view]} width={375} height={300}
            options={{maintainAspectRatio: false}}/>
        </div>
      </Grid>
    )
  }
}
