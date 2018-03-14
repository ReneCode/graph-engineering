
import React from "react";

import Item from "./Item";

const ItemList = props => {
  if (!props.items || props.items.length === 0) {
    return null
  }
  return (
    <g className={props.className}>
      {props.items.map((item, index) => {
        if (!props.ignoreItems || props.ignoreItems.indexOf(item) < 0) {
          return (<Item item={item} key={index} selected={props.selected} />)
        } else {
          return null
        }
      })}
    </g>
  )
}

export default ItemList;
