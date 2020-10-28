import React, { createRef } from 'react';

import style from './style.module.scss';

import { Props } from './type';

export const PopMenu = ({ onClose, onRestart, onBackMenu }: Props) => {

  const popMenuDOM = createRef<HTMLDivElement>();

  const handleClick = (e: any) => {
    (e.target === popMenuDOM.current) && onClose();
  };

  return (
    <div ref={popMenuDOM} className={style.menuWrapper} onClick={handleClick}>
      <ul className={style.menu}>
        <li className={style.title}>PAUSE</li>
        <li onClick={onClose}>Resume</li>
        <li onClick={onRestart}>Restart</li>
        <li onClick={onBackMenu}>Menu</li>
      </ul>
    </div>
  );
};
