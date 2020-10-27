import { SIGN } from 'actions';
import { NonogramData } from 'type';

export const SET = 'SET';
export const MARK = 'MARK';

export interface DispatchParams {
  x: number,
  y: number,
  sign: SIGN,
}

interface SetAction {
  type: typeof SET;
  payload: NonogramData
}

interface MarkAction {
  type: typeof MARK;
  payload: DispatchParams
}

export type MatrixActionTypes = SetAction | MarkAction;

export const set = (payload: NonogramData) => ({ type: SET, payload });
export const mark = (payload: DispatchParams) => ({ type: MARK, payload });