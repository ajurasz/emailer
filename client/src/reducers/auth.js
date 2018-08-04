import {
  FETCH_USER_INIT,
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR
} from '../actions';

const initialState = {
  loaded: false,
  loading: false,
  user: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_COMPLETE:
      return {
        ...state,
        loaded: true,
        loading: false,
        user: action.user
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loaded: true,
        loading: false,
        user: undefined
      };
    default:
      return state;
  }
}
