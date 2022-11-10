import React from 'react';
import 'antd/dist/antd.css';
import { HomeOutlined, DashboardOutlined, ProfileOutlined, DatabaseOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {useNavigate} from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <>
     <Menu
          onClick={({key}) => {
            navigate(key);
          }}
            mode="inline"
            style={{
              height: '100%',
            }}
            items={[
              {label:"Home", key: "/" , icon: <HomeOutlined />},
              {
                label: "Dashboard", 
               key: "/dashboard",
               icon: <DashboardOutlined />,
               children:[
                {label: "Dashboard", key: "/dashboard"}
               ]},
                {label: "Profile", key: "/profile", icon: <ProfileOutlined />},
                {label: "Login", key: "/login" , icon: <DatabaseOutlined />},
                {label: "Settings",  key: "/settings" , icon: <SettingOutlined />},
            ]}
          />
 </>
  )
}

export default Sidebar
