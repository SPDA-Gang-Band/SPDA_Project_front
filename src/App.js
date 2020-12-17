import React from "react";
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

import { HeaderPage } from './components/HeaderPage/HeaderPage';
import { FooterPage } from './components/FooterPage/FooterPage';
import { CoursesPage } from './components/CoursesPage/CoursesPage';
import { MainPage } from './components/MainPage/MainPage';
import { RequestPage } from './components/RequestPage/RequestPage';
import {useSelector} from "react-redux";

function App() {

  const userLogin = useSelector(state => state.login)
  const loggedIn = userLogin !== null

  return (
    <>
      <BrowserRouter>
        <HeaderPage loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/'>
            {loggedIn ? <Redirect to='/course-requests' /> : <MainPage />}
          </Route>
          <Route exact path='/course-requests'>
            {loggedIn ? <CoursesPage /> : <Redirect to='/' />}
          </Route>
          <Route path='/request'>
            {loggedIn ? <RequestPage /> : <Redirect to='/' />}
          </Route>
        </Switch>
        <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
