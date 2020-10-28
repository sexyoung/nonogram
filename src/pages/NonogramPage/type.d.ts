import {
  STATUS,
} from 'actions';

import {
  BitData,
} from 'components/Nonogram/type';

interface StateProps {
  time: number;
  status: STATUS;
}

interface DispatchProps {
  setTime: (t: number) => void,
  tickTime: () => void,
  setStatus: (status: STATUS) => void,
  set: (payload: BitData[]) => void,
}

export type Props = StateProps & DispatchProps;