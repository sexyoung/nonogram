import React from 'react';

import * as d from './index.d';
import { BitData } from 'components/Nonogram/index.d';

type Props = d.MatrixPropsType<BitData>;

export const Matrix: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      Matrix
    </div>
  )
}
