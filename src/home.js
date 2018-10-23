import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, CardTitle, Button } from 'reactstrap'
import Icon from '@material-ui/core/Icon'

const styles = {
  icon: {
    color: '#78C1AD'
  }
}

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
            <CardTitle className="h6">Add Breakfast
              <i className="fa fa-plus-circle ml-2" style={styles.icon}></i>
            </CardTitle>
          </Card>
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Lunch
              <i className="fa fa-plus-circle ml-2" style={styles.icon}></i>
            </CardTitle>
          </Card>
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Dinner
              <i className="fa fa-plus-circle ml-2" style={styles.icon}></i>
            </CardTitle>
          </Card>
          <Card body className="shadow sm text-center m-4">
            <CardTitle className="h6">Add Snacks
              <i className="fa fa-plus-circle ml-2" style={styles.icon}></i>
            </CardTitle>
          </Card>
        </div>
      </Grid>
    )
  }
}
