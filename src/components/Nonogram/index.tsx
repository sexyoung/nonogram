import React from 'react';
import { useResize } from 'hooks';
import * as d from './index.d';

import style from './style.module.scss';

type Props = d.NonogramPropsType;

const longestLen = (data: d.BitData[]) =>
  Math.max(...data.map(arr => arr.length));

const Nonogram: React.FunctionComponent<Props> = ({
  hData,
  vData,
}) => {

  // TODO: 這四個傢伙只需要跑一次就好，有什麼優化辦法嗎
  const vMaxLen = longestLen(vData);
  const hMaxLen = longestLen(hData);
  const col1Style = { flex: vMaxLen }
  const col2Style = { flex: hData.length }

  const [ width, height ] = useResize({
    hLen: hData.length + hMaxLen,
    vLen: vData.length + vMaxLen,
  });
  
  return (
    <div
      style={{ width, height }}
      className={style.Nonogram}
    >
      <div className={style.firstRow} style={{flex: hMaxLen}}>
        <div className={style.empty} style={col1Style}></div>
        <div className={style.horizontalInfo} style={col2Style}>
          {hData.map(hBitList =>
            <div className={style.hBitList}>
              {[...Array(hMaxLen).keys()].map(bit =>
                <div className={style.bit}></div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={style.secondRow} style={{flex: vData.length}}>
        <div className={style.verticalInfo} style={col1Style}>
          這裡的資料可以跟水平資料一樣，所以應該建議一個元件
        </div>
        <div className={style.matrix} style={col2Style}>

        </div>
      </div>
    </div>
  );
}

export default Nonogram;