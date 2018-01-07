
import React , {Component } from 'react'
import {connect}  from 'react-redux'
import { Redirect } from 'react-router';

class Projects extends Component {
  render() {
    if (!this.props.userId) {
      return (
        <Redirect to="/login" />
      )
    }
    return (
      <p>
      PROJECTS
      </p>
    )
  }
}

const mapStateToProps = state => {
  console.log("state:", state)
  return {
    userId: state.user.id
  }
}

export default connect(mapStateToProps)(Projects)
