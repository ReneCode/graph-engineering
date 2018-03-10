
import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from 'material-ui/styles';


import Toolbar from "./Toolbar";
import StatusBar from "./StatusBar";
import Item from "./items/Item";

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
    console.log(this.props.items)
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <svg className={classes.svg}>
          <StatusBar text={this.state.status} />
          <Toolbar click={[this.onLine, this.onSelect]} />
          <g className={classes.items}>
            { this.props.items.map(item => {
              return (
                <Item item={item} />
              );
            }) }
            {/* <path d="M150 40 L75 200 L225 200 Z" /> */}
          </g>
        </svg>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.page.items
  }
}

export default withStyles(styles)(connect(mapStateToProps)(GraphicalEditor));
