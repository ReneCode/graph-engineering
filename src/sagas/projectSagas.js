import { put } from "redux-saga/effects"
import axios from "axios";
import config from "../config";

import * as actions from "../actions"

const urlProjects = `${config.URL_BACKEND}/api/v1/projects`;


export function* loadProjectsSaga() {
  try {
    const result = yield axios.get(urlProjects);
    if (result) {
      yield put(actions.setProjectsAction(result.data))
    }
  } catch (error) {
    console.log("loadProjectsSaga:", error)
  }
}

