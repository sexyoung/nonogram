import cx from 'classnames';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { RootState } from 'reducers';
import { mark, SIGN } from 'actions';

import { Props, DispatchParams } from './type';

import style from './style.module.scss';

export const _Matrix: React.FunctionComponent<Props> = ({ data, mark, martrix, sign }: Props) => {
  
  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);
  const [isErase, setIsErase] = useState(false);

  // const handleClick = (x: number, y: number) => {
  //   console.log(`我按了 [${x}, ${y}]`);
  // }

  const handleStart = (x: number, y: number) => {
    if(martrix[x][y] === sign) {
      setIsErase(true);
      mark({x, y, sign: SIGN.NONE});
    } else {
      mark({x, y, sign});
    }
  }

  const handleMove = (e: React.TouchEvent) => {
    const DOM = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    ) as Element;
    if(DOM === null) return;
    if(DOM.getAttribute('data-type') !== 'box') return;

    const updateX:number = +DOM.getAttribute('data-x')!;
    const updateY:number = +DOM.getAttribute('data-y')!;

    if(updateX !== x || updateY !== y) {
      setX(updateX);
      setY(updateY);
      mark({
        x: updateX,
        y: updateY,
        sign: isErase ? SIGN.NONE: sign,
      });
    }
  }

  const handleEnd = () => {
    setIsErase(false);
  }

  return (
    <div className={style.Matrix}>
      {data.map((row, x) =>
        <div key={x} className={style.row}>
          {row.map((col: number, y: number) =>
            <div
              data-x={x}
              data-y={y}
              data-type="box"
              key={y}
              className={cx(style.col, {
                [style.check]: martrix[x][y] === 1,
                [style.cross]: martrix[x][y] === -1,
              })}
              // onMouseDown={handleClick.bind(this, x, y)}
              // onMouseOver={e => console.log(e.target)}
              onTouchStart={handleStart.bind(this, x, y)}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            ></div>
          )}
        </div>
      )}
    </div>
  )
}

const mapState2Props = (state: RootState) => ({
  sign: state.sign,
  martrix: state.martrix,
});

const mapDispatch2Props = {
  mark: (payload: DispatchParams) => mark(payload),
}

export const Matrix = connect(mapState2Props, mapDispatch2Props)(_Matrix);
