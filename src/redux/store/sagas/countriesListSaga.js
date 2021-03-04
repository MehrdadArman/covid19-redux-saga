import { takeLatest, call, put } from "redux-saga/effects";
import Axios from "axios";
import {
  getCountriesList,
  getCountriesListFailure,
  getCountriesListSuccess,
} from "../../actionType/actionType";

function* asyncGetCountriesList() {
  try {
    const url = "https://covid19.mathdro.id/api/countries";
    const response = yield call(() => Axios.get(url));

    yield put({
      type: getCountriesListSuccess,
      list: response.data.countries,
    });
  } catch (error) {
    yield put({
      type: getCountriesListFailure,
      error: error,
    });
  }
}

export function* watchGetCountriesList() {
  yield takeLatest(getCountriesList, asyncGetCountriesList);
}
