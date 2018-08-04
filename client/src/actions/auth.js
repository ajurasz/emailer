import {
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
  FETCH_USER_INIT
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
