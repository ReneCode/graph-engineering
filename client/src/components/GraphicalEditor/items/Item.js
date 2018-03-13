import React from "react";

import Line from "./Line";
import Circle from "./Circle";

import ItemLine from "../../../models/ItemLine";
import ItemCircle from "../../../models/ItemCircle";

const Item = props => {
  const { item } = props;
  const style = {
    stroke: item.color
  };
  if (item instanceof ItemLine) {
    return (
      <Line item={item} style={style} />
    );
  }

  if (item instanceof ItemCircle) {
    return (
      <Circle item={item} />
    )
  }

  return null;
  // <path d="M150 40 L75 200 L225 200 Z" />
}

export default Item;
