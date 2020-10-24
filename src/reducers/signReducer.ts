import { CHANGE_SIGN, SIGN } from "actions";

const signReducer = (state = SIGN.CHECK, action: any) => {
  switch (action.type) {
  case CHANGE_SIGN:
    return action.payload;
  default:
    return state;
  }
};

export default signReducer;