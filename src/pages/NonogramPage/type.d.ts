import {
  BitData,
} from 'components/Nonogram/type';

interface DispatchProps {
  set: (payload: BitData[]) => void
}

export type Props = DispatchProps;