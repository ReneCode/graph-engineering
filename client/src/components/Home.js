
import React from 'react'
import { withStyles } from 'material-ui/styles'

import TopBar from "./TopBar";
import HomeUserMenu from './HomeUserMenu'

const styles = {
  root: {
    width: '100%',
  }
}

const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TopBar>
        <HomeUserMenu />
      </TopBar>
    </div >
  )
}


export default withStyles(styles)(Home);
