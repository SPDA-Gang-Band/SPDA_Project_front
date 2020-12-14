import React from 'react';
import { Table } from 'antd';

import './CoursesPage.scss';

export const CoursesPage = () => {
    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Название курса',
            dataIndex: 'coursename',
            key: 'coursename'
        },
        {
            title: 'Ссылка на курс',
            dataIndex: 'link',
            key: 'link'
        },
        {
            title: 'Дата начала обучения',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Статус заявки',
            dataIndex: 'status',
            key: 'status'
        }
    ];
    
    /**
     * TODO: add fetching data from api
     * const data = 
     */

    const sampleData = [
        {
            key: '1',
            username: 'Бегишев Данис Фаритович',
            coursename: 'Introduction to Machine Learning',
            link: 'Link',
            date: '10.01.2021',
            price: '50$',
            status: 'В ожидании'
        }
    ]

    return (
        <> 
            <div className="courses">
                <h2 className="courses__title">Заявки на курсы</h2>
                <Table 
                    className="courses__table"
                    columns={columns}
                    dataSource={sampleData}
                />
            </div>
        </>
    )
}