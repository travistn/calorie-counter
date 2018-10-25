import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, CardBody, CardText } from 'reactstrap'

const styles = {
  font: {
    fontSize: '14px'
  },
  icon: {
    cursor: 'pointer',
    fontSize: '20px',
    marginTop: '1.55rem'
  },
  editIcon: {
    fontSize: '17px',
    cusror: 'pointer'
  }
}

export default function FoodItemsList({ foodList, deleteOnClick }) {
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
                <CardText className="text-center h6 text-danger">{item.mealType}</CardText>
                <CardText className="mt-2" style={styles.font}>{item.foodName}
                  <span className="text-primary float-right">
                    <i className="far fa-times-circle"
                      style={styles.icon}
                      onClick={() => deleteOnClick(item)}></i>
                  </span>
                  <span className="text-primary float-right mt-4 m-3">
                    <i className="fas fa-edit" style={styles.editIcon}></i>
                  </span>

                </CardText>
                <CardText style={styles.font}>{item.calories} cal</CardText>
              </CardBody>
            </Card>
          )
        })
      }
    </Grid>
  )
}
