import React from "react"



const Toolbar = (props) => {
  const style = {
    stroke: "gray",
    strokeWidth: "1px",
    rx: "5px",
    width: "40",
    height: "40",
    fill: "white"
  }

  let buttons = []
  const h = 42;
  for (let i=0; i<props.click.length; i++) {
    buttons.push(
      <rect onClick={props.click[i]} x="15" y={i*h + 15} style={style}/>
    );
  }
  return (
    <g>
      { buttons }
    </g>
  )
}

export default Toolbar;

