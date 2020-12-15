import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Menu } from 'antd';

import './HeaderPage.scss';
import logo from '../../images/logo.svg'; 

const { Header } = Layout;

export const HeaderPage = (props) => {

    const extraMenu = () => (
        <>  
            <Link
                className="page-header__item"
                to="/request">
                Создать заявку
            </Link>
            <Link 
                className="page-header__item"
                to="/course-requests">
                Курсы
            </Link>
            <Button
                className="page-header__button"
                type="primary"
            >
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
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <div>{extraMenu()}</div>
                </div>
            </Header>
        </>
    )
}