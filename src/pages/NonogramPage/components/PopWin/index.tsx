import cx from 'classnames';
import React, { useEffect, createRef } from 'react';

import style from './style.module.scss';

import { Props } from './type';

export const PopWin = ({
  onNext,
  onRestart,
  matrixData,
  onBackMenu,
}: Props) => {

  const matrixDOM = createRef<HTMLDivElement>();

  useEffect(() => {
    const hCount = matrixData.length;
    const vCount = matrixData[0].length;
    matrixDOM.current!.style.height = `${matrixDOM.current!.offsetWidth / hCount * vCount}px`;
  }, []);

  return (
    <div className={style.winWrapper}>
      <ul className={style.win}>
        <li>
          <div ref={matrixDOM} className={style.matrix}>
            {matrixData.map((row, y) =>
              <div key={y} className={style.row}>
                {row.map((col, x) =>
                  <div key={x} className={cx(
                    style.col, {
                      [style.check]: col,
                    }
                  )} />
                )}
              </div>
            )}
          </div>
        </li>
        <li className={style.title}>YOU WIN</li>
        <li onClick={onNext}>Next</li>
        <li onClick={onRestart}>Restart</li>
        <li onClick={onBackMenu}>Menu</li>
      </ul>
    </div>
  );
};
