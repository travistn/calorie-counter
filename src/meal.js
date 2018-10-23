import React from 'react'
import Grid from '@material-ui/core/Grid'

export default class Meal extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <div>
          <h2 className="mt-4">{this.props.meal}</h2>
        </div>
      </Grid>
    )
  }
}
