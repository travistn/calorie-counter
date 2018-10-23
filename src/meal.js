import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Form, FormGroup, Button } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

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
        <Form className="mt-2">
          <FormGroup>
            <TextField
              label="Food Name"
              className="w-100 text-center mt-4"/>
          </FormGroup>
          <FormControl className="mt-4">
            <Input
              endAdornment={<InputAdornment position="start">calories</InputAdornment>}/>
          </FormControl>
          <FormGroup className="mt-4 w-100">
            <InputLabel>Serving Size</InputLabel>
            <Select native className="w-100">
              <option value=""/>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </Select>
          </FormGroup>
          <div className="mt-4 text-center">
            <Button color="primary">Save</Button>
          </div>
        </Form>
      </Grid>
    )
  }
}
