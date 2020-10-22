import React from 'react';
import style from './App.module.scss';

import Nonogram from 'components/Nonogram';

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
    </div>
  );
}

export default App;
