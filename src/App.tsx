import React from 'react';
import style from './App.module.scss';

import Nonogram from 'components/Nonogram';

const hData = [
  [4],
  [4],
  [2,1],
  [5],
  [4],
];
const vData = [
  [1,3],
  [5],
  [2,2],
  [5],
  [1,1],
];

function App() {
  return (
    <div className={style.App}>
      <Nonogram
        {...{
          hData,
          vData,
        }}
      />
    </div>
  );
}

export default App;
