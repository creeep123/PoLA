import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import PolaPage from './pages/Pola';
import PolaDetailPage from './pages/PolaDetail';
import ProfilePage from './pages/Profile';
import CoursePage from './pages/Course';
import Enroll from './pages/Course/enroll';
import Detail from './pages/Course/detail';
import './App.less';
import {
  DesktopOutlined,
  FilePptOutlined,
  HomeOutlined,
  UserOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PolaContext from './components/context';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const polaContext = useContext(PolaContext);
  const { role } = polaContext.store;

  const items = [
    getItem(<Link to="/home">Home</Link>, '1', <HomeOutlined />),
    getItem(<Link to="/course">Course</Link>, '2', <DesktopOutlined />),
    getItem(<Link to="/profile">Profile</Link>, '3', <UserOutlined />),
    role === 'student'
      ? getItem(<Link to="/pola">PoLA</Link>, '4', <FilePptOutlined />)
      : null,
    getItem(
      <a href="https://forms.gle/cW7G8qgNTe9j36KD9" target="_blank">
        Report
      </a>,
      '5',
      <PhoneOutlined />
    ),
  ];

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        theme="dark"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}
        {/* Content 路由*/}
        <div className="content-router">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/pola" element={<PolaPage />} />
            <Route path="/pola/detail" element={<PolaDetailPage />} />
            <Route path="/course/enroll/:courseName" element={<Enroll />} />
            <Route path="/course/detail/:courseName" element={<Detail />} />
          </Routes>
        </div>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;
