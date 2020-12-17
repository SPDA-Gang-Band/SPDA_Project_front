import React from 'react';

import { Request } from '../Request/Request';
import './RequestPage.scss';
import { useSelector } from "react-redux";
import { getCourseById } from '../../api/coursesApi';

export const RequestPage = (props) => {

    const [course, setCourse] = React.useState(null);
    const login = useSelector((state) => state.loginReducer.login);
    const editPage = props.location.state;

    React.useEffect(() => {
        if (editPage) {
        const requestId = props.location.state.requestId;
        getCourseById(requestId, login).
            then(response => {
                setCourse(response.data)
            })
            .catch(err => console.log(err));
        }
    }, [])
    
    const title = editPage === undefined ? "Подать заявку на обучение" : "Редактировать заявку";
    return (
        <>
            <div className="request-page">
                <h2 className="request-page__title">{title}</h2>
                <Request courseInfo={course} />
            </div>
        </>
    );
}
