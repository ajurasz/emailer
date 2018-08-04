import { FETCH_USER_COMPLETE, FETCH_USER_ERROR } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_COMPLETE:
      return {
        ...state,
        user: action.user
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        user: undefined
      };
    default:
      return state;
  }
}
