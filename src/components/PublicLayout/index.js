'use client';
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Item } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import ThemeProvider from '../themeProvider';
import { PublicHeader } from '../header';
import Sider from 'antd/es/layout/Sider';
import { useSelector } from 'react-redux';

const menuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'about',
    Label: 'About'
  },
  {
    key: 'users',
    Label: 'Users'
  },
  // {
  //   key: 'about',
  //   Label: 'about'
  // }
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: Array.from({ length: 4 }).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const PublicLayout = (props) => {
  const { children } = props;
  const themeData = useSelector(state => state?.theme || {});
  console.log("##children: ", children);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    <Layout className={`appLayout ${themeData?.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        {/* <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
        <PublicHeader />
      </Header>
      <div style={{ padding: '0 48px', height: '100dvh' }}>
        <Layout
          // style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider
            // style={{ background: colorBgContainer }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', height: '85vh' }}>
            <ThemeProvider>{children}</ThemeProvider>
          </Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default PublicLayout;