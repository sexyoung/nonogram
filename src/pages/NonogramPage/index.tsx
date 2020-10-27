import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { set } from 'actions';

import {
  SignTool,
  Nonogram,
} from './components';

import { Props } from './type';

import style from './style.module.scss';

const matrixData = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  // [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
];

const _NonogramPage = (props: Props) => {

  // useEffect(() => {
  //   props.set(matrixData.map(row => Array(row.length).fill(0)));
  // }, [props]);

  return (
    <div className={style.NonogramPage}>
      <Nonogram
        {...{
          matrixData,
        }}
      />
      <SignTool />
    </div>
  )
}


const mapDispatch2Props = {
  set,
}

export const NonogramPage = connect(null, mapDispatch2Props)(_NonogramPage);
