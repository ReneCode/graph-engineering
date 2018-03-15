
import * as actionTypes from "../actionTypes";

export const startInteraction = (interactionType) => {
  return {
    type: actionTypes.START_INTERACTION,
    interactionType
  }
}
