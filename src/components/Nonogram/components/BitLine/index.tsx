import React from 'react';
import cx from 'classnames';

import * as d from './index.d';

import style from './style.module.scss';

type Props = d.BitLinePropsType;

export const longestLen = (data: d.BitData[]) =>
  Math.max(...data.map(arr => arr.length));

export const BitLine: React.FunctionComponent<Props> = ({ data, direction }) => {
  const maxLen = longestLen(data);
  
  return (
    <div className={cx(
      style.BitLine, {
        [style[direction]]: true
      }
    )}>
      {data.map((lineData, index) =>
        <div key={index} className={style.Line}>
          <div
            className={style.offset}
            style={{flex: maxLen - lineData.length}}
          />
          {lineData.map((bitNumber, index) =>
            <div key={index} className={style.BitNumber}>
              {bitNumber}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default BitLine;