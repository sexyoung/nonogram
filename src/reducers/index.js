import { combineReducers } from 'redux';

import sign from './signReducer';
import martrix from './martrixReducer';

export default combineReducers({
  sign,
  martrix,
});