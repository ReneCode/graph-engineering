import { put, cancelled } from 'redux-saga/effects'

import * as actionTypes from "../actionTypes"
import * as actions from "../actions"
import { getSVGPointSaga } from "./mouseSagas"
import { IA_GENERATE_RECTANGLE } from '../actions/interactionTypes';

import ItemRectangle from "../models/ItemRectangle"

export function* generateRectangleSaga() {
  let rectangle
  try {
    yield put(actions.setStatus("draw Rectangle: set first Point"))
    const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN);
    if (!result) {
      return
    }
    const firstPoint = result.point
    rectangle = new ItemRectangle(firstPoint, firstPoint)
    yield put(actions.addDynamicItem(rectangle))

    yield put(actions.setStatus("draw Rectangle: set second Point"))

    let wait = true
    while (wait) {
      const result = yield getSVGPointSaga([actionTypes.MOUSE_UP, actionTypes.MOUSE_MOVE])
      if (!result) {
        return;
      }
      switch (result.type) {
        case actionTypes.MOUSE_MOVE:
          rectangle.p2 = result.point
          yield put(actions.exchangeDynamicItem(rectangle))
          break;

        case actionTypes.MOUSE_UP:
          yield put(actions.removeDynamicItem(rectangle))
          yield put(actions.addItem(rectangle))
          wait = false

          // restart saga
          yield put(actions.startInteraction(IA_GENERATE_RECTANGLE));
          break;

        default:
          throw new Error(`bad type: ${result.type}`)
      }
    }
    yield put(actions.setStatus())
  } catch (exception) {
    yield put(actions.setExceptionMessageAction(exception.message))
  } finally {
    if (yield cancelled()) {
      yield put(actions.removeDynamicItem(rectangle))
    }
  }
}