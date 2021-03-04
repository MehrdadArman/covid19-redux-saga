import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./redux/store/sagas/index";
// reducer

import { countriesListReducer } from "./redux/store/reducers/countriesListReducer";
import { countryStatReducer } from "./redux/store/reducers/countryStatReducer";
import { globalStatReducer } from "./redux/store/reducers/globalStatReducer";

// combine reducers
const rootReducer = combineReducers({
  countriesList: countriesListReducer,
  countryStat: countryStatReducer,
  globalStat: globalStatReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
