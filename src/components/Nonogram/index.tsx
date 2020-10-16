import React from 'react';
import { useResize } from 'hooks';

import style from './style.module.scss';

type BitData = number[];

interface NonogramPropsType {
  widthData: BitData[],
  heightData: BitData[],
}

type Props = NonogramPropsType;

const Nonogram: React.FunctionComponent<Props> = ({
  widthData,
  heightData,
}) => {
  const [ width, height ] = useResize({
    widthLen: widthData.length,
    heightLen: heightData.length,
  });
  return (
    <div
      style={{ width, height }}
      className={style.Nonogram}
    >
      nonogram
    </div>
  );
}

export default Nonogram;