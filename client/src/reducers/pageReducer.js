
import * as actionTypes from '../actionTypes'
import ItemLine from "../models/ItemLine";
import Point from "../models/Point";

const initialState = {
  selectedItems: [],
  dynamicItems: [],
  items: [
    new ItemLine(new Point(90, 90), new Point(120, 120), { color: "blue " }),
    new ItemLine(new Point(80, 80), new Point(250, 150), { color: "yellow" }),
    new ItemLine(new Point(80, 80), new Point(150, 250), { color: "green" })
  ]
}

const setDynamicItem = (state, action) => {
  const foundIndex = state.dynamicItems.indexOf(action.item)
  if (foundIndex < 0) {
    // not found - append new item
    return {
      ...state,
      dynamicItems: state.dynamicItems.concat(action.item)
    }
  } else {
    // update item
    return {
      ...state,
      dynamicItems: [
        ...state.dynamicItems.slice(0, foundIndex),
        action.item,
        ...state.dynamicItems.slice(foundIndex + 1)
      ]
    }
  }
}


const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item)
      }

    case actionTypes.SET_DYNAMIC_ITEM:
      return setDynamicItem(state, action);

    case actionTypes.REMOVE_DYNAMIC_ITEM:
      return {
        ...state,
        dynamicItems: state.dynamicItems.filter(i => i !== action.item)
      }

    case actionTypes.SET_SELECTED_ITEM:
      if (action.item) {
        return {
          ...state,
          selectedItems: [action.item]
        }
      } else {
        return {
          ...state,
          selectedItems: []
        }
      }

    default:
      return state
  }
}

export default pageReducer
