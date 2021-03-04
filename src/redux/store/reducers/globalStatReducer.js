import {
  getGlobalStat,
  getGlobalStatFailure,
  getGlobalStatSucess,
} from "../../actionType/actionType";

const intialState = {
  global: {},
  loading: false,
  error: {},
};

export const globalStatReducer = (state = intialState, action) => {
  switch (action.type) {
    case getGlobalStat:
      return {
        ...state,
        loading: true,
      };
    case getGlobalStatSucess:
      return {
        ...state,
        loading: false,
        global: action.global,
        error: {},
      };
    case getGlobalStatFailure:
      return {
        ...state,
        loading: false,
        global: {},
        error: action.error,
      };

    default:
      return state;
  }
};
