
import * as actionTypes from '../actionTypes'
import ItemLine from "../models/ItemLine";
import ItemCircle from "../models/ItemCircle";
import Point from "../models/Point";

const initialState = {
  selectedItems: [],
  dynamicItems: [],
  items: [
    new ItemLine(new Point(90, 90), new Point(120, 120), { color: "blue " }),
    new ItemLine(new Point(80, 80), new Point(250, 150), { color: "yellow" }),
    new ItemLine(new Point(80, 80), new Point(150, 250), { color: "green" }),
    new ItemCircle(new Point(130, 130), 60, { color: "#d7d" })
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

const selectItem = (state, action) => {
  if (state.items.indexOf(action.item) < 0) {
    throw new Error("item not in item-list");
  }

  const selectedItems = state.selectedItems.concat(action.item);
  if (action.item) {
    return {
      ...state,
      items: state.items.filter(item => selectedItems.indexOf(item) < 0),
      selectedItems: selectedItems
    }
  } 
}

const unselectItems = (state, action) => {
    return {
      ...state,
      items: state.items.concat(state.selectedItems),
      selectedItems: []
    }
}


const changeSelectedItem = (state, action) => {
  return {
    ...state,
    selectedItems: state.selectedItems.map(item => item.change(action.prop, action.value))
  };
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

    case actionTypes.SELECT_ITEM:
      return selectItem(state, action);

    case actionTypes.UNSELECT_ITEMS:
      return unselectItems(state, action);

    case actionTypes.CHANGE_SELECTED_ITEM:
      return changeSelectedItem(state, action);

    default:
      return state
  }
}

export default pageReducer
