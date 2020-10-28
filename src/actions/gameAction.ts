export const SET_TIME = 'SET_TIME';
export const TICK_TIME = 'TICK_TIME';
export const SET_STATUS = 'SET_STATUS';

export enum STATUS {
  WIN = 'WIN',
  PAUSE = 'PAUSE',
  PLAYING = 'PLAYING',
}

interface SetTimeAction {
  type: typeof SET_TIME,
  payload: number;
}


interface TickTimeAction {
  type: typeof TICK_TIME,
}

interface SetStatusAction {
  type: typeof SET_STATUS,
  payload: STATUS;
}

export type GameActionTypes = (
  SetTimeAction |
  TickTimeAction |
  SetStatusAction
);

export const tickTime = (): TickTimeAction => ({
  type: TICK_TIME
});

export const setStatus = (payload: STATUS): SetStatusAction => ({
  type: SET_STATUS,
  payload,
});

export const setTime = (payload: number): SetTimeAction => ({
  type: SET_TIME,
  payload,
});