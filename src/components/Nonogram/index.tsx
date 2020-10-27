import React, { useEffect } from 'react';
import { useResize } from 'hooks';
import * as d from './type';

import {
  Matrix,
  BitLine,
  longestLen,
} from './components';

import style from './style.module.scss';

type Props = d.NonogramPropsType;

// 這些資料通常是 matrixData 有更新的才會跟著一起變
let vMaxLen: number;
let hMaxLen: number;
let col1Style: object;
let col2Style: object;
let hData: d.BitData[];
let vData: d.BitData[];

const resetData = () => {
  hData = [];
  vData = [];
  vMaxLen = 0;
  hMaxLen = 0;
  col1Style = {};
  col2Style = {};
}

export const flatSum = (arr: number[]) =>
  arr.join("")
  .replace(/00/g, '0')
  .split("0")
  .map(s => s.length)
  .filter(v => v);

resetData();

export const Nonogram: React.FunctionComponent<Props> = ({
  matrixData,
}) => {
  useEffect(() => {
    hData = [...Array(matrixData[0].length).keys()].map(index =>
      flatSum(matrixData.map(row => row[index]))
    );
    vData = matrixData.map(flatSum);
    vMaxLen = longestLen(vData);
    hMaxLen = longestLen(hData);
    col1Style = { flex: vMaxLen }
    col2Style = { flex: hData.length }
    return () => resetData();
  }, [matrixData]);

  const [ width, height ] = useResize({
    hLen: hData.length + vMaxLen,
    vLen: vData.length + hMaxLen,
  });

  if(!width || !height) return null;
  
  return (
    <div
      style={{ width, height }}
      className={style.Nonogram}
    >
      <div className={style.firstRow} style={{flex: hMaxLen}}>
        <div className={style.empty} style={col1Style}></div>
        <div className={style.horizontalInfo} style={col2Style}>
          <BitLine data={hData} direction={'horizontal'} />
        </div>
      </div>
      <div className={style.secondRow} style={{flex: vData.length}}>
        <div className={style.verticalInfo} style={col1Style}>
          <BitLine data={vData} direction={'vertical'} />
        </div>
        <div className={style.matrixBlock} style={col2Style}>
          <Matrix {...{
            data: matrixData
          }} />
        </div>
      </div>
    </div>
  );
}
