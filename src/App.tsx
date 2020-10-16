import React from 'react';
import style from './App.module.scss';

import Nonogram from 'components/Nonogram';

const widthData = [
  [4],
  [4],
  [2,1],
  [5],
  [4],
];
const heightData = [
  [1,3],
  [5],
  [2,2],

];

function App() {
  return (
    <div className={style.App}>
      <Nonogram
        {...{
          widthData,
          heightData,
        }}
      />
    </div>
  );
}

export default App;
