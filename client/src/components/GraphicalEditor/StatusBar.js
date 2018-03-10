
import React from "react";

const StatusBar = (props) => {
  const style = {
    stroke: "black",
    strokeWidth: "1px",
    fontWeight: "normal",
    fontFamily: "Arial",
    fontSize: "20"
  }

  return (
    <text x="90" y="30" style={style}>{props.text}</text>

  );
}

export default StatusBar;

