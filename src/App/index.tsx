import {
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import React from 'react';

import {
  HomePage,
  NonogramPage,
  NotFoundPage,
} from "pages";

import style from './App.module.scss';

export default function App() {
  return (
    <div className={style.App}>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/game/:lv"><NonogramPage /></Route>
          <Route path="*"><NotFoundPage /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
