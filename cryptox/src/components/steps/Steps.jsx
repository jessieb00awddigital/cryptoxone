import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import CreateAccount from '../../pages/CreateAccount';
import Register from '../../pages/Register';




import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



const steps = [
    {
      title: 'CREATE ACCOUNT',
      content: <CreateAccount />,
      className: 'step1',
    },
    {
      title: 'REGISTER DEVICE',
      content: <Register />,
      className: 'step2',
    },
    {
      title: 'SETUP',
      content: 'SETUP',
    },
    {
        title: 'EXTRA',
        content: 'EXTRA',
      },
  ];
  
  const Appnew = () => {
    const [current, setCurrent] = useState(0);
  
    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map(item => ({ key: item.title, title: item.title }));
  
    return (
        <>
      
        <Layout>
        <Header className="header">
        </Header>
        <Sider className="site-layout-background" width={200}>

        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
            <Layout>
            <Steps current={current} items={items} />   

        <Content
          style={{
            padding: '0 24px',
            minHeight: 480,
          }}
        >
         <div className="steps-content">{steps[current].content}</div>
        </Content>

            </Layout>
            <Footer>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        </Footer>
        </Content>


        </Layout>

        </>
    );
  };
  
  export default Appnew;