
import * as actionTypes from '../actionTypes'
import ItemLine from "../models/ItemLine";
import ItemCircle from "../models/ItemCircle";
import ItemGroup from "../models/ItemGroup";
import Point from "../models/Point";

const initialState = {
  highlightItem: undefined,
  selectedItems: [],
  dynamicItems: [],
  items: [

    new ItemGroup([
      new ItemCircle(new Point(200, 80), 40),
      new ItemCircle(new Point(200, 80), 60)
    ]),
    new ItemLine(new Point(90, 90), new Point(120, 120), { color: "blue " }),
    new ItemLine(new Point(80, 80), new Point(250, 150), { color: "yellow" }),
    new ItemLine(new Point(80, 80), new Point(150, 250), { color: "green" }),
    new ItemCircle(new Point(130, 130), 60, { color: "#d7d" })
  ]
}

const exchangeDynamicItem = (state, action) => {
  const itemIndex = state.dynamicItems.indexOf(action.item)
  if (itemIndex >= 0) {
    return {
      ...state,
      dynamicItems: [
        ...state.dynamicItems.slice(0, itemIndex),
        action.item,
        ...state.dynamicItems.slice(itemIndex + 1)
      ]
    }
  } else {
    console.error("exchangeDynamicItem: item not found")
    return state
  }
}

const addDynamicItem = (state, action) => {
  return {
    ...state,
    dynamicItems: state.dynamicItems.concat(action.item)
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
    selectedItems: state.selectedItems.map(item => {
      item.change(action.prop, action.value)
      return item
    })
  };
}


const groupSelectedItems = (state, action) => {
  return {
    ...state,
    selectedItems: [new ItemGroup(state.selectedItems)]
  };
}


const moveSelectedItems = (state, action) => {
  return {
    ...state,
    selectedItems: state.selectedItems.map(item => {
      item.move(action.delta)
      return item
    })
  }
}

const highlightItem = (state, action) => {

  return {
    ...state,
    highlightItem: action.item
  };

  // if (action.item) {
  //   return {
  //     ...state,
  //     items: state.items.map(item => {
  //       if (item !== action.item) {
  //         if (item.isHighlighted) {
  //           let newItem = item.clone();
  //           newItem.setHighlight(false);
  //           return newItem;          
  //         } else {
  //           return item;
  //         }
  //       } else {
  //         let newItem = item.clone();
  //         newItem.setHighlight(true);
  //         return newItem;
  //       }
  //     })
  //   }
  // } else {
  //   return {
  //     ...state,
  //     items: state.items.map(item => {
  //       if (item.isHighlighted) {
  //         let newItem = item.clone();
  //         newItem.setHighlight(false);
  //         return newItem;          
  //       } else {
  //         return item;
  //       }
  //     })
  //   }
  // }
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item)
      }

    case actionTypes.EXCHANGE_DYNAMIC_ITEM:
      return exchangeDynamicItem(state, action)

    case actionTypes.ADD_DYNAMIC_ITEM:
      return addDynamicItem(state, action);

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

    case actionTypes.GROUP_SELECTED_ITEMS:
      return groupSelectedItems(state, action);

    case actionTypes.MOVE_SELECTED_ITEMS:
      return moveSelectedItems(state, action);

    case actionTypes.HIGHLIGHT_ITEM:
      return highlightItem(state, action);

    default:
      return state
  }
}

export default pageReducer
