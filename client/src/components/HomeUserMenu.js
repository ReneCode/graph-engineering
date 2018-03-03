
import React, { Component } from 'react'
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button'

import * as actions from '../actions'

const styles = theme => ({
  root: {
    textAlign: "center",
    margin: 70,
  },
  button: {
    backgroundColor: "#ddf",
    margin: 50,
  },
  login: {
    fontSize: 36,
    width: 200,
    height: 150,
    backgroundColor: "#ddf",
  }
});

class HomeUserMenu extends Component {
  handleLogout() {
    this.props.logoutUser()
    this.props.history.push("/")
  }

  handleProjects() {
    this.props.history.push("/projects")
  }

  handleLogin() {
    this.props.history.push("/login")
  }

  handleRegister() {
    this.props.history.push("/register")
  }

  render() {
    const classes = this.props.classes;

    if (!this.props.userId) {
      return (
        <div className={classes.root}>
          <Button className={classes.login} color="primary" onClick={this.handleLogin.bind(this)}>Login</Button>
          <Button className={classes.button} color="primary" onClick={this.handleRegister.bind(this)}>Register</Button>
        </div>
      )
    } else {
      return (
        <div>
          <Button className={classes.button} color="primary" onClick={this.handleProjects.bind(this)}>Projects</Button>
          <Button className={classes.button} color="primary" onClick={this.handleLogout.bind(this)}>Logout</Button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(actions.logoutUserAction()),
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeUserMenu)));
