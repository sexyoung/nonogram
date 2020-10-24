import { SET, MARK } from 'actions';

const martrixReducer = (state = [], action) => {
  switch (action.type) {
  case SET:
    return [...action.payload];
  case MARK:
    const newState = [...state];
    newState[action.payload.x][action.payload.y] = action.payload.sign;
    // console.log(action.payload);
    return newState;
  default:
    return state;
  }
};

export default martrixReducer;