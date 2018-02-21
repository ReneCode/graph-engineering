
import React from "react";
import { withRouter }  from 'react-router-dom';
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar';
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';

const style = theme => ({
  root: {
    width: '100%',
  },
  button: {
  },
  flex: {
    flex: 1,
  },
});

const TopBar = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={() => props.history.push("/")} className={classes.button} aria-label="Home">
          <HomeIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Graph Engineering
      </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(style)(withRouter(TopBar));
