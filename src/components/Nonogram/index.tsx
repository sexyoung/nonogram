import React from 'react';
import { useResize } from 'hooks';
import { BitData, NonogramPropsType } from './index.d';

import style from './style.module.scss';

type Props = NonogramPropsType;

const longestLen = (data: BitData[]) =>
  Math.max(...data.map(arr => arr.length));

const Nonogram: React.FunctionComponent<Props> = ({
  widthData,
  heightData,
}) => {

  // TODO: 這四個傢伙只需要跑一次就好，有什麼優化辦法嗎
  const verticalMaxLen = longestLen(heightData);
  const horizontalMaxLen = longestLen(widthData);
  const col1Style = { flex: verticalMaxLen }
  const col2Style = { flex: widthData.length }

  const [ width, height ] = useResize({
    widthLen: widthData.length + horizontalMaxLen,
    heightLen: heightData.length + verticalMaxLen,
  });
  
  return (
    <div
      style={{ width, height }}
      className={style.Nonogram}
    >
      <div className={style.firstRow} style={{flex: horizontalMaxLen}}>
        <div className={style.empty} style={col1Style}></div>
        <div className={style.horizontalInfo} style={col2Style}></div>
      </div>
      <div className={style.secondRow} style={{flex: heightData.length}}>
        <div className={style.verticalInfo} style={col1Style}></div>
        <div className={style.matrix} style={col2Style}>
          
        </div>
      </div>
    </div>
  );
}

export default Nonogram;