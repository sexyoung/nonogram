import React from 'react';
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

function App() {
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

export default App;
