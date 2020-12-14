import React from 'react';
import { Form, Input, Button } from 'antd';

import './Request.scss';

export const Request = () => {
    const handleSubmit = (values) => {
        console.log(values);
        // alert(values.json());
    }
    
    return (
        <>  
            <div className="request">
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                >   
                    <Form.Item
                        name="username"
                        label="ФИО">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="coursename"
                        label="Название курса">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="link"
                        label="Ссылка на курс">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Цена курса (в рублях)">
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="date"
                        label="Дата начала курса">
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item
                        name="quarter"
                        label="Квартал обучения">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Обоснование">
                        <Input.TextArea />
                    </Form.Item>
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