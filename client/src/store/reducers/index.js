import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import course from './course';
import subject from './subject';
import material from './material';
import user from './user';

export default combineReducers({
  auth,
  course,
  subject,
  material,
  message,
  user,
});
