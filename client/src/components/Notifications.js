import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import * as actions from '../actions';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});


class Notification extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.clearExceptionMessage();
  };

  render() {
    const { classes } = this.props;
    const open = this.props.exceptionMessage !== undefined;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{this.props.exceptionMessage}</span>}
        action={[
          <Button key="button" color="secondary" size="small" onClick={this.handleClose}>
            Close
            </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
  return {
    exceptionMessage: state.status.exceptionMessage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clearExceptionMessage: () => dispatch(actions.setExceptionMessageAction())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notification));