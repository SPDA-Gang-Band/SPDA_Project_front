import React, {useEffect, useState} from 'react';
import { Space, Select } from 'antd';
import Table from "./Table";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import {editStatus, editCourse, getCourses, deleteCourse} from "../../api/coursesApi";
import { Redirect } from 'react-router-dom';

import './CoursesPage.scss';
import moment from "moment";

const { Option } = Select;

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
            title: 'Цена',
            dataIndex: 'price',
            sorter: {
                compare: (a, b) => {
                    if (a < b) return 1;
                    if (b < a) return -1;
                    return 0;},
                multiple: 3
            },
            key: 'price'
        },
        {
            title: 'Дата начала обучения',
            dataIndex: 'start_date',
            sorter: {
                compare: (dateA, dateB) => moment(dateA).diff(moment(dateB)),
                multiple: 3
            },
            key: 'start_date'
        },
        {
            title: 'Квартал',
            dataIndex: 'study_quarter',
            sorter: {
                compare: (a, b) => {
                    if (a < b) return 1;
                    if (b < a) return -1;
                    return 0;},
                multiple: 3
            },
            key: 'study_quarter'
        },
    ];

    const userLogin = useSelector(state => state.login)
    const [courses, setCourses] = useState([])
    const [redirect, setRedirect] = useState(false);
    const [requestId, setRequestId] = useState(null);
    const [selectedId, setSelectedId] = useState(null)
    const [reload, setReload] = useState(false)

    if (userLogin === 'admin'){
        columns.push(
            {
                title: 'Статус заявки',
                dataIndex: 'status',
                key: 'status',
                filters: [
                    { text: 'Ждёт одобрения', value: 'waiting' },
                    { text: 'На подписании', value: 'signing' },
                    { text: 'Одобрено', value: 'approved' },
                ],
                render: (_, course) => (
                    <Space size="middle">
                        <Select
                            defaultValue = { course.status }
                            style={{ width: 150 }}
                            onChange={handleChange}
                        >
                            <Option value="waiting">Ждёт одобрения</Option>
                            <Option value="signing">На подписании</Option>
                            <Option value="approved">Одобрено</Option>
                        </Select>
                    </Space>
                ),
            })
    }
    else {
        columns.push({
            title: 'Статус заявки',
            dataIndex: 'status',
            key: 'status',
        })
    }
    columns.push(
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <EditOutlined onClick={() => edit(record)} />
            )
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <DeleteOutlined onClick={() => deleteRecord (record)} />
            )
        },
    )
    function handleChange(value) {
        editStatus(selectedId, {status: value},userLogin)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCourses(userLogin)
          .then(response => {
              setCourses(response.data)
              setReload(false)
          })
          .catch(err => console.error(err))
    }, [])

    const edit = (record) => {
        setRedirect(true);
        setRequestId(record.id);
    }

    function deleteRecord(record){
        deleteCourse(record.id, userLogin)
            .then(
                response => setReload(true)
            )
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="courses">
                <h2 className="courses__title">Заявки на курсы</h2>
                <Table
                    className="courses__table"
                    columns={columns}
                    dataSource={courses}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => {
                                setSelectedId(courses[rowIndex].id)
                            }
                        }
                    }}
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
