
import React from "react";

import Item from "./Item";

const ItemList = props => {
  if (!props.items || props.items.length === 0) {
    return null
  }
  return (
    <g className={ props.className }>
      { props.items.map((item, index) => {
          return (<Item item={ item } key={ index } selected={ props.selected } />)
        }) }
    </g>
  )
}

export default ItemList;
