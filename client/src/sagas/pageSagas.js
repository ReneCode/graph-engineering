import { put } from "redux-saga/effects"
import axios from "axios";
import {URL_BACKEND} from "../config";

import * as actions from "../actions"

const urlProjects = (projectId) => 
{
  return `${URL_BACKEND}/api/v1/projects/${projectId}/pages`;
}

export function* loadPagesSaga({projectId}) {

  const url = urlProjects(projectId);
  try {
    const result = yield axios.get(url);
    if (result) {
      yield put(actions.setPagesAction(result.data))
    }
  } catch (error) {
    console.log("loadPagesSaga:", error)
  }
}

