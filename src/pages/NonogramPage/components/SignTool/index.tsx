import React from 'react';
import { connect } from "react-redux";

import { RootState } from 'reducers';
import { changeSign, SIGN } from 'actions';
import { Props } from './type';

import style from './style.module.scss';

export const _SignTool: React.FunctionComponent<Props> = ({ changeSign, ...props }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSign(+e.target.value);
  }

  return (
    <div className={style.SignTool}>
      <input
        id="check"
        name="sign"
        type="radio"
        value={SIGN.CHECK}
        onChange={handleChange}
        checked={props.sign === SIGN.CHECK}
      />
      <label htmlFor="check">✓ check</label>
      <input
        id="cross"
        name="sign"
        type="radio"
        value={SIGN.CROSS}
        onChange={handleChange}
        checked={props.sign === SIGN.CROSS}
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