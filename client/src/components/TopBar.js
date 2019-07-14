
import React from "react";
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const style = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
});

const TopBar = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={() => props.history.push("/")} aria-label="Home">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" noWrap className={classes.grow}>
          Graph Engineering
        </Typography>
      </Toolbar>
      <Button color="inherit">Login</Button>
    </AppBar>
  );
}

export default withStyles(style)(withRouter(TopBar));
