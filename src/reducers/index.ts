import { combineReducers } from 'redux';

import sign from './signReducer';
import martrix from './martrixReducer';

const rootReducer = combineReducers({
  sign,
  martrix,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>