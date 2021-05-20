import { combineReducers } from 'redux';
import auth from './auth/slice';
// import here
import config from './config/slice';
import app from './app/slice';

const rootReducer = combineReducers({
  auth,
  config,
  app,
  // add reducer here
});

export default rootReducer;
