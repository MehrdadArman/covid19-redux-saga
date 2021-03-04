import { takeLatest, call, put } from "redux-saga/effects";
import Axios from "axios";
import {
  getCountryStat,
  getCountryStatSuccess,
  getCountryStatFailure,
} from "../../actionType/actionType";

function* asyncGetCountryStat(action) {
  try {
    const url = `https://covid19.mathdro.id/api/countries/${action.countryName}`;
    const response = yield call(() => Axios.get(url));
    const { confirmed, deaths, recovered } = response.data;

    yield put({
      type: getCountryStatSuccess,
      countryName: action.countryName,
      countryDetail: {
        confirmed: confirmed,
        deaths: deaths,
        recovered: recovered,
      },
    });
  } catch (error) {
    yield put({
      type: getCountryStatFailure,
      error: error,
    });
  }
}

export function* watchGetCountryStat() {
  yield takeLatest(getCountryStat, asyncGetCountryStat);
}
