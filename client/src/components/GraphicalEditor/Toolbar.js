import React from "react"

import PropTypes from "prop-types";

const Toolbar = (props) => {

  const buttonStyle = {
    cursor: "pointer"
  }

  const style = {
    stroke: "gray",
    strokeWidth: "1px",
    rx: "5px",
    width: "40",
    height: "40",
    fill: "white",
  }

  const textStyle = {
    fontFamily: "verdana",
    fontSize: 12,
  };

  let buttons = []
  const h = 42;
  for (let i = 0; i < props.buttons.length; i++) {
    const button = props.buttons[i];
    let x = 15;
    let y = i * h + 15;

    // stopPropagation on mouseDown / mouseUp, because
    // otherwise the svg-element would also receive that
    // event.
    buttons.push(
      <g key={i} 
        onClick={button.click} 
        onMouseDown={ e => e.stopPropagation() } 
        onMouseUp={ e => e.stopPropagation() } 
        style={buttonStyle}>
        <rect key={i} x={x} y={y} style={style} />
        <text x={x + 2} y={y + 3 + h/2} style={textStyle} >{button.text}</text>
      </g>
    );
  }
  return (
    <g>
      {buttons}
    </g>
  )
}

Toolbar.propTypes = {
  buttons: PropTypes.array.isRequired
}

export default Toolbar;

