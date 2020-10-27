import {
  Link,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import React from 'react';

import {
  NonogramPage,
} from "pages";

import style from './App.module.scss';

export default function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/"></Route> */}
          <Route exact path="/game"><NonogramPage /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
