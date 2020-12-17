import React from 'react';

import { Layout } from 'antd';
import './FooterPage.scss';
const { Footer } = Layout;

export const FooterPage = () => {
    return (
        <>
            <Footer 
                className="footer-bg">
                <div className="page-footer">
                    <span className="page-footer__text">© 2018 ПАО «МТС» 18+</span>
                </div>
            </Footer>
        </>
    )
}