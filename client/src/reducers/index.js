import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import survey from './survey';

export default combineReducers({
  user,
  survey,
  form: formReducer
});
