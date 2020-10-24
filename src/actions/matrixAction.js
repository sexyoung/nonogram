export const SET = 'SET';
export const MARK = 'MARK';

export const set = payload => ({ type: SET, payload });
export const mark = payload => ({ type: MARK, payload });