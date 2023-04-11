import React from 'react'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const ButtonContainer = styled.div``

export const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="Email"
        rules={[
          {
            required: true,
            message: '아이디를 입력해 주세요.',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력해 주세요.',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>로그인 상태 유지</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          비밀번호 찾기
        </a>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <Button>register</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
