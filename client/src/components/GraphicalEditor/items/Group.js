import React from "react";

import Item from "./Item";
// TODO: noStyle only, if the group has an own style

const Group = props => {
  const group = props.item;
  return (
    <g style={props.style} >
    {
      group.items.map(i => {
        return <Item key={i.id} item={i} noStyle />
      })
    }
  </g>
  )
}

export default Group;

