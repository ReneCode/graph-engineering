
import React from "react";

const PropertyBar = (props) => {
  const style = {
    backgroundColor: "#eee",
    display: "block", 
    position: "absolute",
    top: 30,
    right: 20,
    width: 150,
    height: 120,
    padding: 3,
    border: "1px solid gray"
  }

  return (
    <div style={style}>
      <div>Color</div>
      <input type="text" value={42}/>
      <div>Width</div>
      <input type="text" value={42}/>
    </div>
  );
}

export default PropertyBar;

