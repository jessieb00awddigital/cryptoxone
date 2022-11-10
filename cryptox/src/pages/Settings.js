import React from 'react';
import 'antd/dist/antd.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeOutlined, DashboardOutlined, ProfileOutlined, DatabaseOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import Sidebar from '../components/sidebar/Sidebar';
import {useNavigate} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;


const Dashboard = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const navigate = useNavigate();

  return (
    <>
      <Layout className='maindashboard'>
 
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Layout
        className="site-layout-background"
        style={{
          padding: '24px 0',
        }}
      >
    
        <Sider className="site-layout-background" width={200}>
<Sidebar />
        </Sider>
  
        <Content className='mainncontent'
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
            <h1>Settings</h1>
  

        </Content>
      </Layout>
    </Content>
  </Layout>
    </>
  )
}

export default Dashboard
