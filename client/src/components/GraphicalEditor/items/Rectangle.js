
import React from "react";

const Rectangle = props => {
  const {item} = props;
  if (item.p1 && item.p2) {
    const minX = Math.min(item.p1.x, item.p2.x)
    const maxX = Math.max(item.p1.x, item.p2.x)
    const minY = Math.min(item.p1.y, item.p2.y)
    const maxY = Math.max(item.p1.y, item.p2.y)

    return (
      <rect x={minX} y={minY} width={maxX - minX} height={maxY - minY} style={props.style} />
    )
  } else {
    return null;
  }
}

export default Rectangle;
