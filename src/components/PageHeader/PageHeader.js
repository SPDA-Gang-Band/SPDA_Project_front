import React from 'react';

import { Layout, Button } from 'antd';

import './PageHeader.scss';
import logo from '../../images/logo.svg'; 

const { Header } = Layout;

export const PageHeader = (props) => {

    const extraMenu = () => (
        <>
            <Button
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