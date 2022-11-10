import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Typography } from 'antd';

const RegisterDevice = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Device">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterDevice;



