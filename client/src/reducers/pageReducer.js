
import * as actionTypes from '../actionTypes'

const initialState = {
  items: [
    {
      type:"line",
      x1:80,
      y1:80,
      x2:250,
      y2: 150,
      color: "green"
    },
    {
      type:"line",
      x1:80,
      y1:80,
      x2:150,
      y2: 250,
      color: "yellow"
    }
  ]
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.items
      }

    default:
      return state
  }
}

export default pageReducer
