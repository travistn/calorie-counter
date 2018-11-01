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

const data = {
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
      data: [2000, 1900, 1800, 1950, 2100, 2400, 2000, 2100]
    }
  ]
}

export default class Chart extends React.Component {
  render() {
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
            <Input type="select">
              <option>Weekly</option>
              <option>Monthly</option>
            </Input>
          </FormGroup>
        </Form>
        <div className="mt-4">
          <Line data={data} width={375} height={300}
            options={{maintainAspectRatio: false}}/>
        </div>
      </Grid>
    )
  }
}
