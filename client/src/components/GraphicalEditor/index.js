
import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from 'material-ui/styles';

import * as actions from "../../actions";

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
            this.props.generateCircle
          ]} />
          <ItemList className={classes.items} items={this.props.items} />
          <ItemList className={classes.dynamic} items={this.props.dynamicItems} />
          {/* <g className={classes.items}>
            <path d="M150 40 L75 200 L225 200 Z" />
          </g> */}
        </SvgCanvas>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.page.items,
    dynamicItems: state.page.dynamicItems,
    status: state.status.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mouseDown: ev => dispatch(actions.mouseDown(ev)),
    mouseUp: ev => dispatch(actions.mouseUp(ev)),
    mouseMove: ev => dispatch(actions.mouseMove(ev)),
    generateLine: () => dispatch(actions.generateLine()),
    generateCircle: () => dispatch(actions.generateCircle())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GraphicalEditor));
