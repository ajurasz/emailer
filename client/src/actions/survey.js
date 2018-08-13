import api from '../api';
import {
  CREATE_SURVEY_ERROR,
  CREATE_SURVEY_COMPLETE,
  CREATE_SURVEY_INIT
} from './types';
import { fetchUser } from './user';

export const createSurvey = (survey, history) => dispatch => {
  dispatch({
    type: CREATE_SURVEY_INIT
  });
  api.survey
    .create(survey)
    .then(_ => dispatch(fetchUser()))
    .then(_ => {
      dispatch({
        type: CREATE_SURVEY_COMPLETE
      });
      history.push('/surveys');
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: CREATE_SURVEY_ERROR
      });
    });
};
