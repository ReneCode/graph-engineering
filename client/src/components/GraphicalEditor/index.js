
import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';

import * as actions from "../../actions";


import PropertyBar from "./PropertyBar";
import SvgCanvas from "./SvgCanvas";
import Toolbar from "./Toolbar";
import StatusBar from "./StatusBar";
import ItemList from "./items/ItemList";
import {
  IA_GENERATE_RECTANGLE,
  IA_GENERATE_LINE,
  IA_GENERATE_CIRCLE,
  IA_SELECT_ITEM,
  IA_CONNECT_ITEMS
} from "../../actions/interactionTypes";

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
    strokeDasharray: "5,5",
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
          onMouseDown={ev => this.props.mouseDown(ev)}
          onMouseUp={ev => this.props.mouseUp(ev)}
          onMouseMove={ev => this.props.mouseMove(ev)}
          onTouchStart={ev => this.props.touchStart(ev)}
          onTouchMove={ev => this.props.touchMove(ev)}
          onTouchEnd={ev => this.props.touchEnd(ev)}
        >
          <StatusBar text={this.props.status} />
          <Toolbar buttons={[
            { click: this.props.generateRectangle, text: "rectangle" },
            { click: this.props.generateLine, text: "line" },
            { click: this.props.generateCircle, text: "circle" },
            { click: this.props.groupSelectedItems, text: "group" },
            { click: this.props.connectItems, text: "connect" },
            // { click: this.props.unGroupSelectedItems, text: "unGrp" },
            { click: this.props.selectItem, text: "select" }
          ]} />
          <ItemList className={classes.items} items={this.props.items} />
          <ItemList className={classes.dynamic} items={this.props.dynamicItems} />
          <g transform={`translate(${this.props.translateSelectedItems.x},${this.props.translateSelectedItems.y})`} >
            <ItemList className={classes.selected} items={this.props.selectedItems} />
          </g>
        </SvgCanvas>
        <PropertyBar items={this.props.selectedItems} changeValue={this.props.changeSelectedItem} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.page.items,
    dynamicItems: state.page.dynamicItems,
    selectedItems: state.page.selectedItems,
    status: state.status.status,
    translateSelectedItems: state.page.translateSelectedItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mouseDown: ev => dispatch(actions.mouseDown(ev)),
    mouseUp: ev => dispatch(actions.mouseUp(ev)),
    mouseMove: ev => dispatch(actions.mouseMove(ev)),
    touchStart: ev => dispatch(actions.touchStart(ev)),
    touchMove: ev => dispatch(actions.touchMove(ev)),
    touchEnd: ev => dispatch(actions.touchEnd(ev)),
    generateRectangle: () => dispatch(actions.startInteraction(IA_GENERATE_RECTANGLE)),
    generateLine: () => dispatch(actions.startInteraction(IA_GENERATE_LINE)),
    generateCircle: () => dispatch(actions.startInteraction(IA_GENERATE_CIRCLE)),
    selectItem: () => dispatch(actions.startInteraction(IA_SELECT_ITEM)),
    changeSelectedItem: (prop, value) => dispatch(actions.changeSelectedItem(prop, value)),
    groupSelectedItems: () => dispatch(actions.groupSelectedItems()),
    connectItems: () => dispatch(actions.startInteraction(IA_CONNECT_ITEMS))
    // unGroupSelectedItems: () => dispatch(actions.unGroupSelectedItems())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GraphicalEditor));
