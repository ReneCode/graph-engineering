import React from "react";

import Item from "./Item";

const Group = props => {
  const group = props.item;
  return (
    <g style={props.style} >
    {
      group.items.map(i => {
        return <Item key={i.id} item={i} />
      })
    }
  </g>
  )
}

export default Group;

