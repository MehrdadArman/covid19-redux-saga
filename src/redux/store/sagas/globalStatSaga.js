import { takeLatest, call, put } from "redux-saga/effects";
import Axios from "axios";
import {
  getGlobalStat,
  getGlobalStatFailure,
  getGlobalStatSucess,
} from "../../actionType/actionType";

function* asyncGetGlobalStat() {
  try {
    const url = "https://covid19.mathdro.id/api";
    const response = yield call(() => Axios.get(url));
    const { confirmed, deaths, recovered } = response.data;

    yield put({
      type: getGlobalStatSucess,
      global: {
        confirmed: confirmed.value,
        death: deaths.value,
        recovered: recovered.value,
      },
    });
  } catch (error) {
    yield put({
      type: getGlobalStatFailure,
      error: error,
    });
  }
}

export function* watchGetGlobalStat() {
  yield takeLatest(getGlobalStat, asyncGetGlobalStat);
}
