import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import firebase from 'firebase'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import * as actions from '../actions'


const styles = theme => ({

});

class RegisterUser extends Component {

  state = {
    open: true,
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: null
  }


  handleRegister = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMessage : 'Password and confirmed password are not equal'
      })
      return
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.props.setUser(user.uid, this.state.email)
        this.setState({
          open: false
        })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        })
      })
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
    return (
      <Dialog open={ this.state.open } onClose={ this.handleClose } aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter Name and password to register for the application.
          </DialogContentText>
          <TextField autoFocus margin="dense" label="Mail" type="email" fullWidth value={ this.state.email } onChange={ this.handleChange('email') } />
          <TextField margin="dense" label="Password" type="password" fullWidth value={ this.state.password } onChange={ this.handleChange('password') } />
          <TextField margin="dense" label="Confirm Password" type="password" fullWidth value={ this.state.confirmPassword } onChange={ this.handleChange('confirmPassword') } />
          <p>{ this.state.errorMessage }</p>
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

const mapDispatchToProps = dispatch => {
  return {
    setUser: (id, email) => dispatch(actions.setUserAction(id, email))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(RegisterUser))
