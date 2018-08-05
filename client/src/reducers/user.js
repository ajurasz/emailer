import {
  FETCH_USER_INIT,
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
  LOGOUT_USER_COMPLETE,
  LOGOUT_USER_ERROR,
  RECHARGE_CREDITS_COMPLETE,
  RECHARGE_CREDITS_ERROR,
  RECHARGE_CREDITS_INIT
} from '../actions';

const initialState = {
  loaded: false,
  recharging: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_INIT:
      return {
        ...state
      };
    case FETCH_USER_COMPLETE:
      return {
        ...state,
        loaded: true,
        user: action.user
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loaded: true,
        user: null
      };
    case LOGOUT_USER_COMPLETE:
    case LOGOUT_USER_ERROR:
      return {
        ...initialState
      };
    case RECHARGE_CREDITS_INIT:
      return {
        ...state,
        recharging: true
      };
    case RECHARGE_CREDITS_COMPLETE:
    case RECHARGE_CREDITS_ERROR:
      return {
        ...state,
        recharging: false,
        user: action.user
      };
    default:
      return state;
  }
}
