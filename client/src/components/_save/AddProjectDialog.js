import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import * as actions from '../actions'
import Project from '../models/Project'

const styles = theme => ({

});

class AddProjectDialog extends Component {

  state = {
    open: false,
    name: ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    })
  }

  onAddProject = () => {
    if (this.state.name) {

      const project = new Project({
        name: this.state.name
      })
      this.props.saveProject(project)
      this.onClose()
    }
  }

  onClose = () => {
    this.props.onClose()
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <Dialog open={ this.state.open } onClose={ this.onClose } aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter Name for the new Project.
          </DialogContentText>
          <TextField autoFocus margin="dense" label="Name" type="text" fullWidth value={ this.state.name } onChange={ this.handleChange('name') } />
          <p>
            { this.props.errorMessage }
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.onAddProject } color="primary">
            Add Project
          </Button>
          <Button onClick={ this.onClose } color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

AddProjectDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    saveProject: project => dispatch(actions.saveProjectAction(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProjectDialog))
