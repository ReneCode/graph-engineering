
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from 'material-ui/Button'

import * as actions from '../actions'

class HomeUserMenu extends Component {
  handleLogout() {
    this.props.setUser(null, null)
  }

  render() {
    if (!this.props.userId) {
      return (
        <div>
          <Link to="/login">
          <Button color="contrast">Login</Button>
          </Link>
          <Link to="/logout">
          <Button color="contrast">Register</Button>
          </Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/projects">
          <Button color="contrast">projects</Button>
          </Link>
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
    setUser: (id, email) => dispatch(actions.setUserAction(id, email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeUserMenu)
