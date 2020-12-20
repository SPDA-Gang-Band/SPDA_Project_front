import React from 'react';
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/constants";

import './Login.scss'

export const Login = () => {

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch({type: loginActions.LOGIN, payload: `${values.name} ${values.surname}`})
  }

  return (
    <>
      <div className="login">

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <div className="login__form-group">
            <Form.Item
              className="login__form-item"
              name="surname"
              label={<label className="login__form-label">Фамилия</label>}
              rules={[{ required: true, message: 'Введите фамилию' }]}
            >
              <Input className="login__form-input"/>
            </Form.Item>
            <Form.Item
              className="login__form-item"
              name="name"
              label={<label className="login__form-label">Имя</label>}
              rules={[{ required: true, message: 'Введите имя' }]}
            >
              <Input className="login__form-input"/>
            </Form.Item>
          </div>

          <Form.Item>
              <Button
                className="login__button"
                htmlType="submit">
                <span className="login__button-text">Войти</span>
              </Button>
            </Form.Item>
        </Form>
      </div>
    </>
  )
}
