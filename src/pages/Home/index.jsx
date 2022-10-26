import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Col, Row } from 'antd';
import CourseList from '../../components/courseList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/course">Course</Link>, '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const searchModal = () => {
    return (
      <>
        <img
          onClick={showModal}
          width="100%"
          src={require('./assets/Searchbar.png')}
          alt="Girl in a jacket"
        ></img>
        <Modal
          open={open}
          title="Search Results"
          onOk={handleOk}
          onCancel={handleCancel}
          // footer={[
          //   <Button key="back" onClick={handleCancel}>
          //     Return
          //   </Button>,
          //   <Button
          //     key="submit"
          //     type="primary"
          //     loading={loading}
          //     onClick={handleOk}
          //   >
          //     Submit
          //   </Button>,
          //   <Button
          //     key="link"
          //     href="https://google.com"
          //     type="primary"
          //     loading={loading}
          //     onClick={handleOk}
          //   >
          //     Search on Google
          //   </Button>,
          // ]}
          footer={null}
        >
          <CourseList></CourseList>
        </Modal>
      </>
    );
  };

  return (
    <Content
      style={{
        margin: '0 16px',
        height: '100vh',
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        <Row>
          <Col span={14}>
            <Row>
              <Col span={24}>
                <img
                  width="100%"
                  src={require('./assets/HEADER.png')}
                  alt="Girl in a jacket"
                ></img>
              </Col>
            </Row>
            <Row style={{ marginTop: '16px' }}>
              <Col span={24} className="pola-title">
                Enrolled Courses
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CourseList></CourseList>
              </Col>
            </Row>
          </Col>
          <Col span={10} style={{ paddingLeft: '24px' }}>
            <Row>
              <Col span={24} style={{ marginTop: '46px' }}>
                {searchModal()}
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ marginTop: '16px' }}>
                <img
                  width="100%"
                  src={require('./assets/STATS BOXES.png')}
                  alt="Girl in a jacket"
                ></img>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ marginTop: '16px' }}>
                <img
                  width="100%"
                  src={require('./assets/YOUR STATISTICS SECTION.png')}
                  alt="Girl in a jacket"
                ></img>
              </Col>
            </Row>
            {/* <Row>
              <Col span={24} style={{ marginTop: '16px' }}>
                <img
                  width="100%"
                  src={require('./assets/GO PREMIUM BANNER.png')}
                  alt="Girl in a jacket"
                ></img>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </div>
    </Content>
  );
};
export default Home;
