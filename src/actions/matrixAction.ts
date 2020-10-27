import { NonogramData } from 'type';
import { DispatchParams } from 'components/Nonogram/components/Matrix/type'; // 不覺得有點蠢嗎

export const SET = 'SET';
export const MARK = 'MARK';

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