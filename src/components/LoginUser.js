import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import * as actions from '../actions'


const styles = theme => ({

});

class LoginUser extends Component {

  state = {
    open: true,
    email: '',
    password: ''
  }


  handleLogin = () => {
    this.props.loginUser(this.state.email, this.state.password)
  }

  handleClose = () => {
    this.setState({
      open: false
    });
    this.props.history.push('/')
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter Name and password to login to the application.
          </DialogContentText>
          <TextField autoFocus margin="dense" label="Mail" type="email" fullWidth value={ this.state.email } onChange={ this.handleChange('email') } />
          <TextField margin="dense" label="Password" type="password" fullWidth value={ this.state.password } onChange={ this.handleChange('password') } />
          <p>
            { this.props.errorMessage }
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.handleLogin } color="primary">
            Login
          </Button>
          <Button onClick={ this.handleClose } color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    errorMessage: state.user.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(actions.loginUserAction(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginUser))
