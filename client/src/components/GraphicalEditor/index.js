
import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from 'material-ui/styles';

import * as actions from "../../actions";


import PropertyBar from "./PropertyBar";
import SvgCanvas from "./SvgCanvas";
import Toolbar from "./Toolbar";
import StatusBar from "./StatusBar";
import ItemList from "./items/ItemList";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },

  items: {
    stroke: "red",
    strokeWidth: "1px",
    fill: "none",
  },

  dynamic: {
    stroke: "gray",
    strokeWidth: "1px",
    fill: "none",
  },

  selected: {
    stroke: "#111",
    strokeWidth: "2px",
    fill: "none",
    strokeDasharray: "10,10",
    animation: "dashOffsetAnimation 0.8s infinite",
    animationTimingFunction: "linear"
  },

  canvas: {
    flexGrow: 1,
    margin: "4px",
    backgroundColor: "blue"
  }

});

class GraphicalEditor extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SvgCanvas
          mouseDown={ev => this.props.mouseDown(ev)}
          mouseUp={ev => this.props.mouseUp(ev)}
          mouseMove={ev => this.props.mouseMove(ev)}
        >
          <StatusBar text={this.props.status} />
          <Toolbar click={[
            this.props.generateLine,
            this.props.generateCircle,
            this.props.selectItem
          ]} />
          <ItemList className={classes.items} items={this.props.items} ignoreItems={this.props.selectedItems} />
          <ItemList className={classes.dynamic} items={this.props.dynamicItems} />
          <ItemList className={classes.selected} items={this.props.selectedItems} />
        </SvgCanvas>
        <PropertyBar />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.page.items,
    dynamicItems: state.page.dynamicItems,
    selectedItems: state.page.selectedItems,
    status: state.status.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mouseDown: ev => dispatch(actions.mouseDown(ev)),
    mouseUp: ev => dispatch(actions.mouseUp(ev)),
    mouseMove: ev => dispatch(actions.mouseMove(ev)),
    generateLine: () => dispatch(actions.generateLine()),
    generateCircle: () => dispatch(actions.generateCircle()),
    selectItem: () => dispatch(actions.selectItem())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GraphicalEditor));
