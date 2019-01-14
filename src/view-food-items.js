import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card, CardBody, CardText, Button } from 'reactstrap'

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
  },
  circle: {
    width: '85%'
  },
  card: {
    width: '15rem'
  },
  favorite: {
    color: 'gray'
  }
}

export default function FoodItemsList({ foodList, deleteOnClick }) {
  if (foodList.length < 1) {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="mt-5">
        <h2 className="mt-4">List of Food Items</h2>
        <h6 className="mt-4">{"There doesn't seem to be anything here, let's start adding!"}</h6>
        <Button color="primary" href='#add-food-item' className="mt-4">Add Food Item</Button>
      </Grid>
    )
  }
  if (foodList.length > 0) {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <h2 className="mt-4">List of Food Items</h2>
        {
          foodList.map((item, index) => {
            const foodId = item.id
            const url = `#edit-food-item?id=${foodId}`
            return (
              <Card className="m-4 shadow sm border-light" style={styles.card} key={index}>
                <CardBody>
                  <CardText className="text-center h6 text-danger">Looks good!
                    <i className="far fa-star ml-3" style={styles.favorite}></i>
                  </CardText>
                  <CardText className="mt-2" style={styles.font}>{item.foodName}
                    <span className="text-primary float-right">
                      <i className="far fa-times-circle"
                        style={styles.icon}
                        onClick={() => deleteOnClick(item)}></i>
                    </span>
                    <span className="text-primary float-right mt-4 m-3">
                      <a href={url}>
                        <i className="fas fa-edit" style={styles.editIcon}></i>
                      </a>
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
}
