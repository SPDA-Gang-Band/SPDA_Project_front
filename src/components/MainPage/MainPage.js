import React from 'react';
import {Login} from "../Login/Login";

import './MainPage.scss'

export const MainPage = () => {
  return (
      <>
        <div className="login-page">
          <h2 className="login-page__title">Вход в приложение</h2>
          <Login />
        </div>
      </>
  )
}
