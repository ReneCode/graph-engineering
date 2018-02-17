
import React, { Component } from 'react'
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux'

import Button from 'material-ui/Button'

import * as actions from '../actions'

class HomeUserMenu extends Component {
  handleLogout() {
    this.props.logoutUser()
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
    if (!this.props.userId) {
      return (
        <div>
          <Button color="contrast" onClick={this.handleLogin.bind(this)}>Login</Button>
          <Button color="contrast" onClick={this.handleRegister.bind(this)}>Register</Button>
        </div>
      )
    } else {
      return (
        <div>
          <Button color="contrast" onClick={this.handleProjects.bind(this)}>Projects</Button>
          <Button color="contrast" onClick={this.handleLogout.bind(this)}>Logout</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeUserMenu));
