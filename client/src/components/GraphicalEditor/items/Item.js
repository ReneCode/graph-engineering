import React from "react";
// import { connect } from "react-redux";

import Line from "./Line";
import Circle from "./Circle";
import Group from "./Group";

import ItemLine from "../../../models/ItemLine";
import ItemCircle from "../../../models/ItemCircle";
import ItemGroup from "../../../models/ItemGroup";

const Item = props => {
  const { item, noStyle } = props;

  let style = {};
  if (noStyle !== true) {
    style = {
      stroke: item.color,
      strokeWidth: item.strokeWidth
    };
  }

  // if (item === props.highlightItem) {
  //   style.strokeWidth = 5;
  //   style.strokeDasharray= "5,5";
  //   style.animation= "dashOffsetAnimation 0.2s infinite";
  //   style.animationTimingFunction = "linear";
  // }

  if (item instanceof ItemLine) {
    return (
      <Line item={item} style={style} />
    );
  }

  if (item instanceof ItemCircle) {

    return (
      <Circle item={item} style={style} />
    )
  }

  if (item instanceof ItemGroup) {
    return (
      <Group item={item} style={style} />
    )
  }

  return null;
  // <path d="M150 40 L75 200 L225 200 Z" />
}

// const mapStateToProps = state => {
//   return {
//     highlightItem: state.page.highlightItem
//   };
// }

// export default connect(mapStateToProps)(Item);
export default Item;
