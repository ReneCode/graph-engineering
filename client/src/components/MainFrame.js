
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Routing from "./Routing"
import Notifications from "./Notifications"

const styles = {
  root: {
    width: '100%',
  }
}

const MainFrame = ({ classes }) => {
  return (
    <Router>
      <div className={classes.root}>
        <div className="main-frame">
          <Routing />
          <Notifications />
        </div>
      </div>
    </Router>
  )
}

export default withStyles(styles)(MainFrame);
