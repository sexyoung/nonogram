import { SIGN } from 'actions';
import {
  BitData,
  NonogramPropsType,
} from 'components/Nonogram';

interface OwnProps {
  data: BitData[];
}

interface StateProps {
  sign: SIGN;
  martrix: NonogramPropsType;
}

export interface DispatchParams {
  x: number,
  y: number,
  sign: SIGN,
}

interface DispatchProps {
  mark: (payload: DispatchParams) => void
}

export type Props = OwnProps & StateProps & DispatchProps;