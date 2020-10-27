import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { set } from 'actions';

import { BitData } from 'components/Nonogram/index.d';

import style from './App.module.scss';

import {
  SignTool,
  Nonogram,
} from 'components';

const matrixData = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

function App(props: any) {

  useEffect(() => {
    props.set(matrixData.map(row => Array(row.length).fill(0)));
  }, [])

  return (
    <div className={style.App}>
      <Nonogram
        {...{
          matrixData,
        }}
      />
      <SignTool />
    </div>
  );
}

const mapDispatch2Props = (dispatch: any) => ({
  set: (data: BitData[]) => dispatch(set(data)),
});

export default connect(null, mapDispatch2Props)(App);
