
import React from "react";
import PropTypes from "prop-types"

const SvgCanvas = props => {
  const style = {
    backgroundColor: "lightgrey",
    height: "400px",
    width: "100%"
  };

  return (
    <svg style={style}
      onMouseDown={ev => {
        ev.persist()
        props.onMouseDown(ev)
      }}
      onMouseUp={ev => {
        ev.persist()
        props.onMouseUp(ev)
      }}
      onMouseMove={ev => {
        ev.persist()
        props.onMouseMove(ev)
      }}
      onTouchStart={ev => props.onTouchStart(ev)}
      onTouchMove={ev => props.onTouchMove(ev)}
      onTouchEnd={ev => props.onTouchEnd(ev)}
    >
      {props.children}
    </svg>
  );
}

SvgCanvas.propTypes = {
  onMouseDown: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchMove: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
}

export default SvgCanvas;
