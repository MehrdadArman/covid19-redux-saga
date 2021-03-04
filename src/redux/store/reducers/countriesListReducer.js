import {
  getCountriesList,
  getCountriesListFailure,
  getCountriesListSuccess,
} from "../../actionType/actionType";

const intialState = {
  list: [],
  loading: false,
  error: {},
};
export const countriesListReducer = (state = intialState, action) => {
  switch (action.type) {
    case getCountriesList:
      return {
        ...state,
        loading: true,
      };
    case getCountriesListSuccess:
      return {
        ...state,
        loading: false,
        list: action.list,
        error: {},
      };
    case getCountriesListFailure:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.error,
      };

    default:
      return state;
  }
};
