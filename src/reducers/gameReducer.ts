import {
  STATUS,
  SET_TIME,
  TICK_TIME,
  SET_STATUS,
  GameActionTypes,
} from 'actions';

const initData = {
  time: 0,
  status: STATUS.PLAYING,
};

const gameReducer = (state = initData, action: GameActionTypes) => {
  switch (action.type) {
  case TICK_TIME:
    return {
      ...state,
      time: state.time + 1,
    };
  case SET_TIME:
    return {
      ...state,
      time: action.payload,
    };
  case SET_STATUS:
    return {
      ...state,
      status: action.payload,
    };
  default:
    return state;
  }
};

export default gameReducer;