
import React from "react";

import { withStyles } from 'material-ui/styles';


import Toolbar from "./Toolbar";


const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },

  svg: {
    stroke: "red",
    strokeWidth: "2px",
    fill: "none",
    backgroundColor: "lightgrey",
    border: "2px solid yellow",
    margin: "5px"
  },

  canvas: {
    flexGrow: 1,
    margin: "4px",
    backgroundColor: "blue"
  }

});

const GraphicalEditor = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Toolbar />
      <div className={classes.canvas}>
        <svg width="100%" height="300" className={classes.svg}>
          <path d="M150 40 L75 200 L225 200 Z" />
        </svg>
      </div>

    </div>
  )
}

export default withStyles(styles)(GraphicalEditor);
