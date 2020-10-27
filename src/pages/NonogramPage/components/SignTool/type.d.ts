import { SIGN } from 'actions';

interface StateProps {
  sign: SIGN
}

interface DispatchProps {
  changeSign: (payload: SIGN) => void
}

export type Props = StateProps & DispatchProps;