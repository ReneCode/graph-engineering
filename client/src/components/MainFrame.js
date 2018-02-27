
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "material-ui/styles";

import Routing from "./Routing"
import TopBar from "./TopBar";
import HomeUserMenu from './HomeUserMenu'

const styles = {
  root: {
    width: '100%',
  }
}

const MainFrame = ({ classes }) => {
  return (
    <Router>
      <div className={classes.root}>
        <TopBar>
          <HomeUserMenu />
        </TopBar>
        <div className="main-frame">
          <Routing />
        </div>
      </div>
    </Router>
  )
}

export default withStyles(styles)(MainFrame);
