import { put, select } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

import pickNearestItem from "../utilities/pickNearestItem";

import { getSVGPointSaga } from "./mouseSagas";

function* getItems() {
  const getPageState = state => state.page;
  const pageState = yield select(getPageState);
  return pageState.items;
}



export function* selectItemSaga() {
  yield put(actions.setStatus("SelectItem"));

  const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN)
  if (!result) {
    return
  }

  const pickRadius = 10;
  const { point } = result;
  const items = yield getItems();

  const pickedItem = pickNearestItem(items, point, pickRadius)

  // let minDistance;
  // let pickedItem;
  // items.forEach(item => {
  //   const result = item.pickDistance(point, pickRadius);
  //   if (result) {
  //     if (pickedItem === undefined) {
  //       pickedItem = item;
  //       minDistance = result.distance;
  //     } else {
  //       if (result.distance < minDistance) {
  //         pickedItem = item;
  //         minDistance = result.distance;
  //       }
  //     }
  //   }
  // })

  console.log("picked:", pickedItem);

}
