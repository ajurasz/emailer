import {
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
  FETCH_USER_INIT,
  LOGOUT_USER_INIT,
  LOGOUT_USER_COMPLETE,
  LOGOUT_USER_ERROR
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
