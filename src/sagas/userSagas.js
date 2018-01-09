
import { put } from 'redux-saga/effects'

import * as firebase from 'firebase'

import * as actions from '../actions'

export function* loginUserSaga({email, password}) {
  try {
    yield firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    const user = yield firebase.auth().signInWithEmailAndPassword(email, password)
    if (user) {
      yield put(actions.setUserAction(user.uid, email))
  }
  } catch (error) {
    yield put(actions.setUserErrorAction(error.code, error.message))
  }
}

export function* registerUserSaga({email, password}) {
  try {
    yield firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    const user = yield firebase.auth().createUserWithEmailAndPassword(email, password)
    if (user) {
      yield put(actions.setUserAction(user.uid, email))
    }
  } catch (error) {
    yield put(actions.setUserErrorAction(error.code, error.message))
  }
}

