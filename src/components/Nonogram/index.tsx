import React from 'react';

import style from './style.module.scss';

type BitData = number[];

interface NonogramPropsType {
  rowData: BitData[],
  columnData: BitData[],
}

type Props = NonogramPropsType;

const Nonogram: React.FunctionComponent<Props> = () => {
  return (
    <div className={style.Nonogram}>
      nonogram
    </div>
  );
}

export default Nonogram;