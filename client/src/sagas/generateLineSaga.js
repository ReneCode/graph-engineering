import { put, cancelled } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
// import * as interactionTypes from '../interactions/interactionTypes'
import * as actions from '../actions'
import ItemLine from '../models/ItemLine';

import { getSVGPointSaga } from "./mouseSagas";

export function* generateLineSaga() {
  yield put(actions.setStatus("Line: set first Point"));

  const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN)
  if (!result) {
    return
  }
  const firstPoint = result.point
  let line = new ItemLine(firstPoint, firstPoint)

  try {
    let wait = true
    while (wait) {
      yield put(actions.setStatus("Line: set second Point"));
      const result = yield getSVGPointSaga([actionTypes.MOUSE_UP, actionTypes.MOUSE_MOVE])
      if (!result) {
        return
      }
      if (result.type === actionTypes.MOUSE_MOVE) {
        // rubberband on mouse move
        line.setFromTwoPoints(firstPoint, result.point)
        yield put(actions.setDynamicItem(line))
      } else {
      yield put(actions.setStatus());
      yield put(actions.removeDynamicItem(line))
        if (firstPoint.equal(result.point)) {
          wait = false
        } else {
          const finalLine = new ItemLine(firstPoint, result.point)
          yield put(actions.addItem(finalLine))
          wait = false;
          // restart interaction
          // yield put(actions.startInteraction(interactionTypes.IA_RECTANGLE))
        }
      }
    }
  } finally {
    if (yield cancelled()) {
      yield put(actions.removeDynamicItem(line))
    }
  }
}
