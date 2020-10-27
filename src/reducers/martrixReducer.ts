import { NonogramData } from 'type';

import {
  SET,
  MARK,
  MatrixActionTypes,
} from 'actions';

const martrixReducer = (state = [], action: MatrixActionTypes) => {
  switch (action.type) {
  case SET:
    return [...action.payload];
  case MARK:
    const { x, y, sign } = action.payload;
    const newState: NonogramData = [...state];
    newState[x][y] = sign;
    return newState;
  default:
    return state;
  }
};

export default martrixReducer;