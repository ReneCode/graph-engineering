import { put, cancelled } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'
import ItemCircle from '../models/ItemCircle';

import { getSVGPointSaga } from "./mouseSagas";
import { IA_GENERATE_CIRCLE } from '../actions/interactionTypes';

export function* generateCircleSaga() {
  yield put(actions.setStatus("Circle: set middle Point"));

  const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN)
  if (!result) {
    return
  }
  const firstPoint = result.point
  let circle = new ItemCircle(firstPoint, 0)

  const calcRadius = p2 => {
    return p2.sub(firstPoint).length();
  }

  try {
    let wait = true
    while (wait) {
      yield put(actions.setStatus("Circle: set radius"));
      const result = yield getSVGPointSaga([actionTypes.MOUSE_UP, actionTypes.MOUSE_MOVE])
      if (!result) {
        return
      }
      if (result.type === actionTypes.MOUSE_MOVE) {
        // rubberband on mouse move
        
        circle.setRadius(calcRadius(result.point));
        yield put(actions.setDynamicItem(circle))
      } else {
        yield put(actions.setStatus());
        yield put(actions.removeDynamicItem(circle))
        if (firstPoint.equal(result.point)) {
          wait = false
        } else {
          const radius = calcRadius(result.point);
          const finalCircle = new ItemCircle(firstPoint, radius)
          yield put(actions.addItem(finalCircle))

          // restart saga
          yield put(actions.startInteraction(IA_GENERATE_CIRCLE));
        }
      }
    }
  } finally {
    if (yield cancelled()) {
      yield put(actions.removeDynamicItem(circle))
    }
  }
}
