import React from 'react';
import { Form, Input, Button } from 'antd';

import './Request.scss';

export const Request = () => {

    const [form] = Form.useForm();

    const sendForm = async (data) => {
        const response = await fetch(``, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        }).catch(function(error){
            console.log(error);
        })
        if (response){
            const resData = await response.json();

            if (resData.status === 'success'){
               alert('Data sent'); 
            }
            else if (resData.status === 'fail'){
                alert('Something went wrong');
            }
        }
    }

    const handleSubmit = (values) => {
        
        // sendForm(values);
        console.log(values);
        form.resetFields();
    }
    
    return (
        <>  
            <div className="request">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="firstname"
                            label={<label className="request__form-label">Фамилия</label>}
                            required>
                            <Input className="request__form-input"/>
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="lastname"
                            label={<label className="request__form-label">Имя</label>}
                            required>
                            <Input className="request__form-input"/>
                        </Form.Item>
                    </div>
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="coursename"
                            label={<label className="request__form-label">Название курса</label>}
                            required>
                            <Input className="request__form-input" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="link"
                            label={<label className="request__form-label">Ссылка на курс</label>}
                            required>
                            <Input className="request__form-input" />
                        </Form.Item>
                    </div>
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="price"
                            label={<label className="request__form-label">Цена курса (в рублях)</label>}>
                            <Input className="request__form-input" type="number" />
                        </Form.Item>
                        <Form.Item
                            className="request__form-item"
                            name="date"
                            label={<label className="request__form-label">Дата начала курса</label>}>
                            <Input className="request__form-input" type="date" />
                        </Form.Item>
                    </div>  
                    <div className="request__form-group">
                        <Form.Item
                            className="request__form-item"
                            name="quarter"
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
                            <span className="request__button-text">Отправить</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}