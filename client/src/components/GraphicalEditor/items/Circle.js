
import React from "react";

const Circle = props => {
  const item = props.item;
  if (item) {

    return (
      <circle cx={item.p.x} cy={item.p.y} r={item.radius} />
    )
  } else {
    return null;
  }
}

export default Circle;
