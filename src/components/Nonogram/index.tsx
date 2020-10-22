import React from 'react';
import { useResize } from 'hooks';
import * as d from './index.d';

import BitLine, { longestLen } from './components/BitLine';

import style from './style.module.scss';

type Props = d.NonogramPropsType;

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

  // TODO: 如果 width or height 是 0 ，就不應該 render
  console.log(width, height);
  
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
        <div className={style.matrix} style={col2Style}>
          matrix how do it?
        </div>
      </div>
    </div>
  );
}

export default Nonogram;