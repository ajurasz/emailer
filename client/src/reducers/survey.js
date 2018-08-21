import { FETCH_SURVEYS_COMPLETE } from '../actions/types';

const initialState = {
  surveys: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURVEYS_COMPLETE:
      return {
        ...state,
        surveys: action.surveys
      };
    default:
      return state;
  }
};
