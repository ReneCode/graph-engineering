
import React from "react";


const SvgCanvas = props => {
  const style = {
    backgroundColor: "lightgrey",
    height: "400px",
    width: "100%"
  };

  return (
    <svg style={style}
    onMouseDown={ev => props.mouseDown(ev)}
    onMouseUp={ev => props.mouseUp(ev)}
    onMouseMove={ev => props.mouseMove(ev)}
    >
      {props.children}
    </svg>
  );
}

export default SvgCanvas;
