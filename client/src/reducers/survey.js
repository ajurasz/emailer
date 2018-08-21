import {
  FETCH_SURVEYS_COMPLETE,
  FETCH_SURVEYS_INIT,
  FETCH_SURVEYS_FAIL
} from '../actions/types';

const initialState = {
  surveys: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURVEYS_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_SURVEYS_COMPLETE:
      return {
        ...state,
        surveys: action.surveys,
        loading: false
      };
    case FETCH_SURVEYS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
