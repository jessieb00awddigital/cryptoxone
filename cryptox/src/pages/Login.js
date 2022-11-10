import React from 'react';
import Loginform from '../components/forms/Login';


import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Login = () => {

  return (
    <>
        <Layout>
  
      <Content direction="horizontal" className='centercontt'>      
        <h1>LOGIN</h1>
<Loginform />
</Content>

    </Layout>
   


    </>
)
}

export default Login
