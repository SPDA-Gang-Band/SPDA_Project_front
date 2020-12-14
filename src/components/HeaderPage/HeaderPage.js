import React from 'react';

import { Layout, Button } from 'antd';

import './HeaderPage.scss';
import logo from '../../images/logo.svg'; 

const { Header } = Layout;

export const HeaderPage = (props) => {

    const extraMenu = () => (
        <>
            <Button
                className="page-header__button"
                type="primary"
                danger>
                <span className="page-header__button-text">
                    {props.loggedIn ? 'Войти' : 'Выйти'}
                </span>
            </Button>
        </>
    )

    return (
        <>  
            <Header>
                <div className="page-header">
                    <img src={logo} alt="logo" />
                    <div>{extraMenu()}</div>
                </div>
            </Header>
        </>
    )
}