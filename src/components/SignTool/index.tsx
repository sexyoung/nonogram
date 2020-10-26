import React from 'react';
import { connect } from "react-redux";

import { RootState } from 'reducers';
import { changeSign, SIGN } from 'actions';
import { Props } from './type';

import style from './style.module.scss';

export const _SignTool: React.FunctionComponent<Props> = ({ changeSign }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSign(+e.target.value);
  }

  return (
    <div className={style.SignTool}>
      <input
        id="check"
        type="radio"
        name="sign"
        value={SIGN.CHECK}
        onChange={handleChange}
        defaultChecked
      />
      <label htmlFor="check">✓ check</label>
      <input
        id="cross"
        type="radio"
        name="sign"
        value={SIGN.CROSS}
        onChange={handleChange}
      />
      <label htmlFor="cross">× cross</label>
    </div>
    )
}

const mapState2Props = (state: RootState) => ({
  sign: state.sign,
})

const mapDispatch2Props = {
  changeSign: (payload: SIGN) => changeSign(payload),
}

export const SignTool = connect(
  mapState2Props,
  mapDispatch2Props
)(_SignTool);