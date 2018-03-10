
import React, { Component } from "react";

import { withStyles } from 'material-ui/styles';


import Toolbar from "./Toolbar";
import StatusBar from "./StatusBar";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },

  svg: {
    backgroundColor: "lightgrey",
    margin: "5px",
    height: "400px",
    width: "100%"
  },

  items: {
    stroke: "red",
    strokeWidth: "2px",
    fill: "none",
  },

  canvas: {
    flexGrow: 1,
    margin: "4px",
    backgroundColor: "blue"
  }

});

class GraphicalEditor extends Component {
  constructor(props) {
    super(props);
    this.onLine = this.onLine.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      status: "ready"
    };
  }

  onLine() {
    this.setState({
      status: "line"
    })
  }

  onSelect() {
    this.setState({
      status: "Select"
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <svg className={classes.svg}>
          <StatusBar text={this.state.status} />
          <Toolbar click={[this.onLine, this.onSelect]} />
          <g className={classes.items}>
            <path d="M150 40 L75 200 L225 200 Z" />
          </g>
        </svg>
      </div>
    )
  }
}

export default withStyles(styles)(GraphicalEditor);
