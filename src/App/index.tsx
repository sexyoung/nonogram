import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { set } from 'actions';

import { Props } from './type';
import { BitData } from 'type';

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

function App(props: Props) {

  useEffect(() => {
    props.set(matrixData.map(row => Array(row.length).fill(0)));
  }, [props]);

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

const mapDispatch2Props = {
  set: (data: BitData[]) => set(data),
}

export default connect(null, mapDispatch2Props)(App);
