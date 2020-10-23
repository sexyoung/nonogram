import React from 'react';

import style from './style.module.scss';

interface Props {
  
}

export const SignTool = (props: Props) => {
  return (
    <div className={style.SignTool}>
      <input
        id="check"
        type="radio"
        name="sign"
        value="check"
        defaultChecked
      />
      <label htmlFor="check">✓ check</label>
      <input
        id="cross"
        type="radio"
        name="sign"
        value="cross"
      />
      <label htmlFor="cross">× cross</label>
    </div>
    )
}
