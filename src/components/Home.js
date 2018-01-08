
import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar';

import HomeUserMenu from './HomeUserMenu'

const style = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
}

const Home = (props) => {
  const {classes} = props;
  return (
    <div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={ classes.flex }>
            Graph-Engineering
          </Typography>
          <HomeUserMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(style)(Home)
