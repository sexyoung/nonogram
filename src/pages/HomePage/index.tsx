import React from 'react';
import {
  Link,
} from "react-router-dom";
import stages from 'stages';

import style from './style.module.scss';

interface Props {

}

export const HomePage = (props: Props) => {
  return (
    <div className={style.HomePage}>
      <header className={style.header}>Stage select</header>
      {Object.keys(stages).map(stage =>
        <Link
          to={`/game/${stage}`}
          key={stage}
          className={style.stage}
        >{stage}</Link>
      )}
    </div>
  );
};
