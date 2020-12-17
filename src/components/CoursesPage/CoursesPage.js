import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { editCourse, getCourses } from '../../api/coursesApi';
import { Redirect } from 'react-router-dom';

import './CoursesPage.scss';

export const CoursesPage = () => {
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname',
            key: 'surname'
        },
        {
            title: 'Название курса',
            dataIndex: 'course_name',
            key: 'course_name'
        },
        {
            title: 'Ссылка на курс',
            dataIndex: 'link',
            key: 'link'
        },
        {
            title: 'Дата начала обучения',
            dataIndex: 'start_date',
            key: 'start_date'
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <EditOutlined onClick={() => edit(record)} />
            )
        }
        // {
        //     title: 'Статус заявки',
        //     dataIndex: 'status',
        //     key: 'status'
        // }
    ];
    const userLogin = useSelector(state => state.loginReducer.login)
    const [courses, setCourses] = useState([])
    const [redirect, setRedirect] = useState(false);
    const [requestId, setRequestId] = useState(null);

    useEffect(() => {
        getCourses(userLogin)
          .then(response => {
              setCourses(response.data)
          })
          .catch(err => console.error(err))
    }, [])

    const edit = (record) => {
        setRedirect(true);
        setRequestId(record.id);
    }

    // const sampleData = [
    //     {
    //         key: '1',
    //         username: 'Бегишев Данис Фаритович',
    //         coursename: 'Introduction to Machine Learning',
    //         link: 'Link',
    //         date: '10.01.2021',
    //         price: '50$',
    //         status: 'В ожидании'
    //     }
    // ]

    return (
        <> 
            <div className="courses">
                <h2 className="courses__title">Заявки на курсы</h2>
                <Table 
                    className="courses__table"
                    columns={columns}
                    dataSource={courses}
                />
                {redirect && (
                    <Redirect to={{
                        pathname: "/request",
                        state: {
                            isEdit: true,
                            requestId: requestId
                        }
                    }} />
                )}
            </div>
        </>
    )
}
