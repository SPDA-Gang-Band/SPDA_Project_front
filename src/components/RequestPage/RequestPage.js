import React from 'react';

import { Request } from '../Request/Request';
import './RequestPage.scss';

export const RequestPage = () => {
    return (
        <>
            <div className="request-page">
                <h2 className="request-page__title">Подать заявку на обучение</h2>
                <Request />
            </div>
        </>
    );
}