
import React from "react";

const Line = props => {
  const {item} = props;
  if (item.p1 && item.p2) {
    return (
      <line x1={item.p1.x} y1={item.p1.y} x2={item.p2.x} y2={item.p2.y} style={props.style} />
    )
  } else {
    return null;
  }
}

export default Line;
