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
    fontSize: 10,
  };

  let buttons = []
  const h = 42;
  for (let i = 0; i < props.buttons.length; i++) {
    const button = props.buttons[i];
    let x = 15;
    let y = i * h + 15;
    buttons.push(
      <g style={buttonStyle}>
        <rect key={i} onClick={button.click} x={x} y={y} style={style} />
        <text x={x + 5} y={y + h/2} style={textStyle} >{button.text}</text>
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
  buttons: PropTypes.object.isRequired
}

export default Toolbar;

