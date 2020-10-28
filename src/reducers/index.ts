import { combineReducers } from 'redux';

import game from './gameReducer';
import sign from './signReducer';
import martrix from './martrixReducer';

const rootReducer = combineReducers({
  game,
  sign,
  martrix,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>