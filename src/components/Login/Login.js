import React, {useEffect} from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../store/constants";

import './Login.scss'

export const Login = () => {

  const [form] = Form.useForm();
  const userLogin = useSelector(state => state.loginReducer.login)

  useEffect(() => {
    userLogin && redirect()
  }, [])

  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch({type: loginActions.LOGIN, payload: values.login})
    redirect()
  }

  const redirect = () => {
    console.log("Redirect")
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
              name="login"
              label={<label className="login__form-label">Логин</label>}
              rules={[{ required: true, message: 'Введите логин' }]}
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
