import {
  getCountryStat,
  getCountryStatSuccess,
  getCountryStatFailure,
} from "../../actionType/actionType";

const intialState = {
  countryDetail: {},
  loading: false,
  error: {},
};

export const countryStatReducer = (state = intialState, action) => {
  switch (action.type) {
    case getCountryStat:
      return {
        ...state,
        loading: true,
      };
    case getCountryStatSuccess:
      return {
        ...state,
        loading: false,
        countryDetail: {
          ...state.countryDetail,
          [action.countryName]: action.countryDetail,
        },
        error: {},
      };
    case getCountryStatFailure:
      return {
        ...state,
        loading: false,
        countryDetail: {},
        error: action.error,
      };

    default:
      return state;
  }
};
