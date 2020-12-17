import React, {useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import { createCourse, editCourse } from "../../api/coursesApi";
import {useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';

import './Request.scss';

export const Request = (props) => {
    const formRef = React.createRef();
    const [redirect, setRedirect] = React.useState(false);
    const [form] = Form.useForm();
    const userLogin = useSelector(state => state.loginReducer.login)
    const isCreatePage = props.courseInfo === null;

    const courseItem = isCreatePage ? {
        name: "",
        surname: "",
        course_name: "",
        link: "",
        price: "",
        start_date: "",
        study_quarter: "",
        status: "",
        description: ""
    } : props.courseInfo;

    const buttonText = isCreatePage ? "Отправить" : "Сохранить изменения";
    console.log("item", courseItem);

    const sendForm = (data) => {
        if (isCreatePage){
            createCourse(data, userLogin)
            .then(response => {
                // TODO: redirect to courses page
                // console.log(response)
                form.resetFields()
                setRedirect(true);
            })
            .catch(err => console.error(err))  
        }
        else {
            editCourse(props.courseInfo.id, data, userLogin)
            .then(response => {
                form.resetFields()
                setRedirect(true)
            })
            .catch(err => console.error(err))
        }
    }

    const handleSubmit = (values) => {
        console.log(values);
        form.validateFields()
          .then(() => {
              sendForm(values);
          })
    }

    React.useEffect(() => {
        formRef.current.setFieldsValue(courseItem);
    })
    return (
        <>  
        {console.log("item 2: ",courseItem)}
            <div className="request">
                <Form
                    ref={formRef}
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <div className="request__form-group">
                        <Form.Item
                            ref={formRef}
                            className="request__form-item"
                            name="name"
                            label={<label className="request__form-label">Фамилия</label>}
                            rules={[{ required: true, message: 'Введите фамилию' }]}
                        >
                            <Input className="request__form-input"/>
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="surname"
                            label={<label className="request__form-label">Имя</label>}
                            rules={[{ required: true, message: 'Введите имя' }]}
                        >
                            <Input className="request__form-input"/>
                        </Form.Item>
                    </div>
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="course_name"
                            label={<label className="request__form-label">Название курса</label>}
                            rules={[{ required: true, message: 'Введите название курса' }]}
                        >
                            <Input className="request__form-input" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="link"
                            label={<label className="request__form-label">Ссылка на курс</label>}
                            rules={[{ required: true, message: 'Вставьте ссылку на курс' }]}
                        >
                            <Input className="request__form-input" />
                        </Form.Item>
                    </div>
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="price"
                            label={<label className="request__form-label">Цена курса (в рублях)</label>}
                            rules={[{ required: true, message: 'Укажите цену курса' }]}
                        >
                            <Input className="request__form-input" type="number" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="start_date"
                            label={<label className="request__form-label">Дата начала курса</label>}>
                            <Input className="request__form-input" type="date" />
                        </Form.Item>
                    </div>  
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="study_quarter"
                            label={<label className="request__form-label">Квартал обучения</label>}>
                            <Input className="request__form-input" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="description"
                            label={<label className="request__form-label">Обоснование</label>}>
                            <Input.TextArea rows={3} />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            className="request__button"
                            htmlType="submit">
                            <span className="request__button-text">{buttonText}</span>
                        </Button>
                    </Form.Item>
                </Form>
                {redirect && (
                    <Redirect to="/course-requests" />
                )}
            </div>
        </>
    )
}

// export default Form.create()(Request);
