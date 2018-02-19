
import React from "react";
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar';
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton';

const style = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
}

const TopBar = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Graph Engineering
      </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(style)(TopBar);
