import {
  Route,
  Switch,
  BrowserRouter,
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/game/:lv"><NonogramPage /></Route>
          <Route path="*"><NotFoundPage /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
