import {
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
  FETCH_USER_INIT,
  LOGOUT_USER_INIT,
  LOGOUT_USER_COMPLETE,
  LOGOUT_USER_ERROR,
  NEW_PAYMENT_COMPLETE,
  NEW_PAYMENT_ERROR
} from './types';
import api from '../api';

export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER_INIT
  });
  api.user
    .info()
    .then(user =>
      dispatch({
        type: FETCH_USER_COMPLETE,
        user
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_USER_ERROR
      })
    );
};

export const logoutUser = history => dispatch => {
  dispatch({
    type: LOGOUT_USER_INIT
  });
  api.user
    .logout()
    .then(_ => {
      dispatch({
        type: LOGOUT_USER_COMPLETE
      });
      history.push('/');
    })
    .catch(err => {
      dispatch({
        type: LOGOUT_USER_ERROR
      });
      history.push('/');
    });
};

export const newPayment = token => dispatch => {
  api.user
    .newPayment()
    .then(user => {
      dispatch({
        type: NEW_PAYMENT_COMPLETE,
        user
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: NEW_PAYMENT_ERROR
      });
    });
};
