
import  * as actionTypes from "../actionTypes";

export const setDynamicItem = item => {
  return {
    type: actionTypes.SET_DYNAMIC_ITEM,
    item
  }
}

export const removeDynamicItem = item => {
  return {
    type: actionTypes.REMOVE_DYNAMIC_ITEM,
    item
  }
}

export const highlightItem = item => {
  return {
    type: actionTypes.HIGHLIGHT_ITEM,
    item
  }
}


export const selectItem = item => {
  return {
    type: actionTypes.SELECT_ITEM,
    item
  }
}

export const unselectItems = () => {
  return {
    type: actionTypes.UNSELECT_ITEMS,
  }
}

export const groupSelectedItems = () => {
  return {
    type: actionTypes.GROUP_SELECTED_ITEMS
  }
}

// export const unGroupSelectedItems = () => {
//   return {
//     type: actionTypes.UNGROUP_SELECTED_ITEMS
//   }
// }

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    item
  }
}

export const changeSelectedItem = (prop, value) => {
  return {
    type: actionTypes.CHANGE_SELECTED_ITEM,
    prop,
    value
  }
}