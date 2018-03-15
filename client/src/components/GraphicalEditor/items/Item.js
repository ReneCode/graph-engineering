import React from "react";

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

export default Item;
