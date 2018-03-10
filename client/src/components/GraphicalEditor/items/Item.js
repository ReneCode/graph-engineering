import React from "react";

import Line from "./Line";

const Item = props => {
  const { item } = props;
  switch (item.type) {
    case "line":
      return (
        <Line item={item} />
      );

    default:
      return null;
  }
  // <path d="M150 40 L75 200 L225 200 Z" />
}

export default Item;
