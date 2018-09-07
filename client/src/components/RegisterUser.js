import React, { Component } from 'react'
import { Redirect } from 'react-router';

import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/Dialog';

import * as actions from '../actions'


const styles = theme => ({

});

class RegisterUser extends Component {

  state = {
    open: true,
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleRegister = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.props.setUserError(null, 'Password and confirmed password are not equal')
      return
    }

    this.props.registerUser(this.state.email, this.state.password);
  }

  handleClose = () => {
    this.setState({
      open: false
    });
    this.props.history.push('/')
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      errorMessage: null
    })
  }

  render() {
    if (this.props.userId) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <Dialog open={ this.state.open } onClose={ this.handleClose } aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter mail and password to register for the application.
          </DialogContentText>
          <TextField autoFocus margin="dense" label="Mail" type="email" fullWidth value={ this.state.email } onChange={ this.handleChange('email') } />
          <TextField margin="dense" label="Password" type="password" fullWidth value={ this.state.password } onChange={ this.handleChange('password') } />
          <TextField margin="dense" label="Confirm Password" type="password" fullWidth value={ this.state.confirmPassword } onChange={ this.handleChange('confirmPassword') } />
          <p>
            { this.props.errorMessage }
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.handleRegister } color="primary">
            Register
          </Button>
          <Button onClick={ this.handleClose } color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

RegisterUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    errorMessage: state.user.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (email, password) => dispatch(actions.registerUserAction(email, password)),
    setUserError: (errorCode, errorMessage) => dispatch(actions.setUserErrorAction(errorCode, errorMessage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegisterUser))
