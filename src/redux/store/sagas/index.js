import { all } from "redux-saga/effects";
import { watchGetGlobalStat } from "./globalStatSaga";
import { watchGetCountriesList } from "./countriesListSaga";
import { watchGetCountryStat } from "./countrySaga";

export function* rootSaga() {
  yield all([
    watchGetGlobalStat(),
    watchGetCountriesList(),
    watchGetCountryStat(),
  ]);
}
