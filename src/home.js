import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, CardTitle } from 'reactstrap'

export default class Home extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <div className="mt-5">
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Breakfast</CardTitle>
          </Card>
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Lunch</CardTitle>
          </Card>
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Dinner</CardTitle>
          </Card>
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Snacks</CardTitle>
          </Card>
        </div>
      </Grid>
    )
  }
}
