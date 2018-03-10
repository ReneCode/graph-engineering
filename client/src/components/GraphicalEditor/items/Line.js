
import React from "react";

const Line = props => {
  const {item} = props;
  const style = {
    stroke: item.color
  };
  return (
    <line x1={item.x1} y1={item.y1} x2={item.x2} y2={item.y2} style={style} />
  )
}

export default Line;
