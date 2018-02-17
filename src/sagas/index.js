
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes'
import * as userSagas from './userSagas'

const sagas = [
  takeLatest(actionTypes.LOGIN_USER, userSagas.loginUserSaga),
  takeLatest(actionTypes.LOGOUT_USER, userSagas.logoutUserSaga),
  takeLatest(actionTypes.REGISTER_USER, userSagas.registerUserSaga)
]

export default sagas

