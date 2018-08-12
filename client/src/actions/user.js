import {
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
  FETCH_USER_INIT,
  LOGOUT_USER_INIT,
  LOGOUT_USER_COMPLETE,
  LOGOUT_USER_ERROR,
  RECHARGE_CREDITS_COMPLETE,
  RECHARGE_CREDITS_ERROR,
  RECHARGE_CREDITS_INIT,
  SUBMIT_SURVEY_INIT,
  SUBMIT_SURVEY_COMPLETE,
  SUBMIT_SURVEY_ERROR
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

export const recharge = token => dispatch => {
  dispatch({
    type: RECHARGE_CREDITS_INIT
  });
  api.wallet
    .recharge(token)
    .then(_ => api.user.info())
    .then(user => {
      dispatch({
        type: RECHARGE_CREDITS_COMPLETE,
        user
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: RECHARGE_CREDITS_ERROR
      });
    });
};

export const submitSurvey = (survey, history) => dispatch => {
  dispatch({
    type: SUBMIT_SURVEY_INIT
  });
  api.survey
    .create(survey)
    .then(_ => api.user.info())
    .then(user => {
      dispatch({
        type: SUBMIT_SURVEY_COMPLETE,
        user
      });
      history.push('/surveys');
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: SUBMIT_SURVEY_ERROR
      });
    });
};
