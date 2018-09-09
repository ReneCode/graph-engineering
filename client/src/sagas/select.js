import { select } from "redux-saga/effects"

export function* getPage() {
  const page = yield select(state => state.page)
  return page;
}

export function* getPickRadius() {
  const page = yield getPage()
  return page.pickRadius
}
