import React, { createRef } from 'react';

import style from './style.module.scss';

import { Props } from './type';

export const PopWin = ({ onNext, onRestart, onBackMenu }: Props) => {

  return (
    <div className={style.winWrapper}>
      <ul className={style.win}>
        <li className={style.title}>YOU WIN</li>
        <li onClick={onNext}>Next</li>
        <li onClick={onRestart}>Restart</li>
        <li onClick={onBackMenu}>Menu</li>
      </ul>
    </div>
  );
};
