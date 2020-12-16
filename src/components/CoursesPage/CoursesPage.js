import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import { useSelector } from "react-redux";
import { getCourses } from "../../api/coursesApi";

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
        // {
        //     title: 'Статус заявки',
        //     dataIndex: 'status',
        //     key: 'status'
        // }
    ];

    const userLogin = useSelector(state => state.loginReducer.login)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses(userLogin)
          .then(response => {
              setCourses(response.data)
          })
          .catch(err => console.error(err))
    }, [])

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
            </div>
        </>
    )
}
