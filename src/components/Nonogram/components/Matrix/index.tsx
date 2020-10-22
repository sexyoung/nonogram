import React from 'react';

import * as d from './index.d';
import { BitData } from 'components/Nonogram/index.d';

import style from './style.module.scss';

type Props = d.MatrixPropsType<BitData>;

export const Matrix: React.FunctionComponent<Props> = ({ data }: Props) => {
  
  const handleClick = (x: number, y: number) => {
    console.log(`我按了 [${x}, ${y}]`);
  }
  
  return (
    <div className={style.Matrix}>
      {data.map((row, x) =>
        <div key={x} className={style.row}>
          {row.map((col, y) =>
            <div
              key={y}
              className={style.col}
              onClick={handleClick.bind(this, x, y)}
            ></div>
          )}
        </div>
      )}
    </div>
  )
}
