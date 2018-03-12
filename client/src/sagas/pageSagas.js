/*
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
      const sortedPages = result.data.sort( (p1, p2) => {
        const s1 = p1.sortId || -1;
        const s2 = p2.sortId || -1;
        return s1 - s2;
      });
      yield put(actions.setPagesAction(sortedPages));
    }
  } catch (error) {
    console.log("loadPagesSaga:", error)
  }
}
*/
