
import React , { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import ProjectCard from './ProjectCard'
import AddProjectDialog from './AddProjectDialog'

import * as actions from '../actions'

const styles = theme => ({
  root: {
    margin: 50,
    flexGrow: 1
  }
})

class Projects extends Component {
  state = {
    showAddProject: false
  }

  componentWillMount() {
    this.props.loadProjects()
  }

  onShowAddProject() {
    this.setState({
      showAddProject: true
    })
  }

  onCloseAddProject() {
    this.setState({
      showAddProject: false
    })
  }

  render() {
    const classes = this.props.classes
    return (
      <Grid container className={ classes.root } justify="flex-start" spacing={ 24 }>
        <AddProjectDialog open={ this.state.showAddProject } onClose={ this.onCloseAddProject.bind(this) } />
        <ProjectCard>
          <p></p>
          <Button onClick={ this.onShowAddProject.bind(this)  } color="primary">
          Add New Project
          </Button>
        </ProjectCard>
        { this.props.projects.map(project => {
            return (
              <ProjectCard firstButton="open" secondButton="...">
                { project.name }
              </ProjectCard>
            )
          }
          ) }
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProjects: () => dispatch(actions.loadProjectsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Projects))
