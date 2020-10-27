import {
  SIGN,
  DispatchParams,
} from 'actions';
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

interface DispatchProps {
  mark: (payload: DispatchParams) => void;
}

export type Props = OwnProps & StateProps & DispatchProps;