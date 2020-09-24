import React from 'react';
import style from './App.module.scss';

import Nonogram from 'components/Nonogram';

function App() {
  return (
    <div className={style.App}>
      <Nonogram />
    </div>
  );
}

export default App;
