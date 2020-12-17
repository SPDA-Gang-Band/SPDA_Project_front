import React, {useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import { createCourse } from "../../api/coursesApi";
import {useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';

import './Request.scss';

export const Request = (props) => {
    const formRef = React.createRef();
    const [redirect, setRedirect] = React.useState(false);
    const [form] = Form.useForm();
    const userLogin = useSelector(state => state.loginReducer.login)
    console.log("info ", props.courseInfo);
    // const [courseItem, setCourseItem] = React.useState({});
    const courseItem = props.courseInfo === null ? {
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

    console.log("item", courseItem);

    const sendForm = (data) => {
        createCourse(data, userLogin)
          .then(response => {
              // TODO: redirect to courses page
              console.log(response)
              form.resetFields()
              setRedirect(true);
          })
          .catch(err => console.error(err))  
    }

    const handleSubmit = (values) => {
        console.log(values);
        form.validateFields()
          .then(() => {
              sendForm(values);
          })
    }
    const data = {
        id: "1",
        name: courseItem.name,
        surname: "f",
        course_name: "asfd",
        link: "",
        price: "",
        start_date: "",
        study_quarter: "",
        status: "",
        description: ""
    }
    console.log('typeof', typeof(courseItem.name));

    return (
        <>  
        {console.log("item 2: ",courseItem)}
            <div className="request">
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={data}
                    onFinish={handleSubmit}
                    // initialValues={{
                    //     name: 'fhuf',
                    //     surname: courseItem.surname 
                    // }}
                >
                    <div className="request__form-group">
                        <Form.Item
                            ref={formRef}
                            className="request__form-item"
                            name="name"
                            label={<label className="request__form-label">Фамилия</label>}
                            rules={[{ required: true, message: 'Введите фамилию' }]}
                        >
                        {/* {props.form.getFieldDecorator('name', {
                            initialValue: courseItem.name
                            })() }*/}
                            <Input 
                                defaultValue={courseItem.name}
                                className="request__form-input"/>
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="surname"
                            initialValue={courseItem.surname}
                            label={<label className="request__form-label">Имя</label>}
                            rules={[{ required: true, message: 'Введите имя' }]}
                        >
                            <Input className="request__form-input"/>
                        </Form.Item>
                    </div>
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            initialValue={courseItem.course_name}
                            name="course_name"
                            label={<label className="request__form-label">Название курса</label>}
                            rules={[{ required: true, message: 'Введите название курса' }]}
                        >
                            <Input className="request__form-input" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            initialValue={courseItem.link}
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
                            initialValue={courseItem.price}
                            name="price"
                            label={<label className="request__form-label">Цена курса (в рублях)</label>}
                            rules={[{ required: true, message: 'Укажите цену курса' }]}
                        >
                            <Input className="request__form-input" type="number" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            initialValue={courseItem.start_date}
                            name="start_date"
                            label={<label className="request__form-label">Дата начала курса</label>}>
                            <Input className="request__form-input" type="date" />
                        </Form.Item>
                    </div>  
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            initialValue={courseItem.study_quarter}
                            name="study_quarter"
                            label={<label className="request__form-label">Квартал обучения</label>}>
                            <Input className="request__form-input" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            initialValue={courseItem.description}
                            name="description"
                            label={<label className="request__form-label">Обоснование</label>}>
                            <Input.TextArea rows={3} />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            className="request__button"
                            htmlType="submit">
                            <span className="request__button-text">Отправить</span>
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
