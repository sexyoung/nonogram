import {
  SIGN,
  CHANGE_SIGN,
  ChatActionTypes,
} from "actions";

const signReducer = (state = SIGN.CHECK, action: ChatActionTypes) => {
  switch (action.type) {
  case CHANGE_SIGN:
    return action.payload;
  default:
    return state;
  }
};

export default signReducer;