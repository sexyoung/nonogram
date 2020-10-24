export enum SIGN {
  NONE = 0,
  CHECK = 1,
  CROSS = -1,
}

export const CHANGE_SIGN = 'CHANGE_SIGN';

export const changeSign = (payload: any) => ({
  type: CHANGE_SIGN,
  payload
});