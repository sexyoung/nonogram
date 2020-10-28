export enum SIGN {
  NONE = 0,
  CHECK = 1,
  CROSS = -1,
}

export const CHANGE_SIGN = 'CHANGE_SIGN';

interface ChangeSignAction {
  type: typeof CHANGE_SIGN;
  payload: SIGN
}

export type ChatActionTypes = ChangeSignAction;

export const changeSign = (payload: SIGN): ChangeSignAction => ({
  type: CHANGE_SIGN,
  payload,
});
