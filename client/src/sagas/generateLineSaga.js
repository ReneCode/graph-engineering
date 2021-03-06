import { put, cancelled } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'
import ItemLine from '../models/ItemLine';

import { getSVGPointSaga } from "./mouseSagas";
import { IA_GENERATE_LINE } from '../actions/interactionTypes';

export function* generateLineSaga() {
  yield put(actions.setStatus("Line: set first Point"));

  const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN)
  if (!result) {
    return
  }
  const firstPoint = result.point
  let line = new ItemLine(firstPoint, firstPoint)
  yield put(actions.addDynamicItem(line))

  try {
    let wait = true
    while (wait) {
      yield put(actions.setStatus("Line: set second Point"));
      const result = yield getSVGPointSaga([actionTypes.MOUSE_UP, actionTypes.MOUSE_MOVE])
      if (!result) {
        return
      }
      switch (result.type) {
        case actionTypes.MOUSE_MOVE:
          // rubberband on mouse move
          line.setFromTwoPoints(firstPoint, result.point)
          yield put(actions.exchangeDynamicItem(line))
          break;

        case actionTypes.MOUSE_UP:
          yield put(actions.setStatus());
          yield put(actions.removeDynamicItem(line))
          if (firstPoint.equal(result.point)) {
            wait = false
          } else {
            const finalLine = new ItemLine(firstPoint, result.point)
            yield put(actions.addItem(finalLine))
            wait = false;

            // restart saga
            yield put(actions.startInteraction(IA_GENERATE_LINE));
          }
          break;
        default:
          debugger
          throw new Error(`bad type: ${result.type}`);
      }
    }
  } finally {
    if (yield cancelled()) {
      yield put(actions.removeDynamicItem(line))
    }
  }
}
