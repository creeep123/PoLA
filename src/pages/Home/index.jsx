import { Select } from 'antd';
import { Button, Modal, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Col, Row } from 'antd';
import CourseList from '../../components/courseList';
import React, { useContext, useState } from 'react';
import PolaContext from '../../components/context';
import { Link } from 'react-router-dom';
import courseData from '../../components/coursesData';
const { Content } = Layout;
const { Option } = Select;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchCourse, setSearchCourse] = useState("")
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

  const children = [];
  for (let i = 0; i < courseData.length; i++) {
    children.push(
      <Option key={courseData[i].courseName}>{courseData[i].courseName}</Option>
    );
  }

  const searchModal = () => {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <Select
            onChange={(key) => {
              setSearchCourse(key)
              showModal();
            }}
            size="large"
            showSearch
            placeholder="Search Courses"
            optionFilterProp="children"
            prefix={<SearchOutlined />}
            // onChange={onChange}
            // onSearch={onSearch}
            style={{ borderRadius: '14px', width: '100%' }}
            // filterOption={(input, option) =>
            //   option.children.toLowerCase().includes(input.toLowerCase())
            // }
          >
            {children}
          </Select>
        </div>
        <Modal
          open={open}
          title="Search Results"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <CourseList></CourseList>
        </Modal>
      </>
    );
  };

  const polaContext = useContext(PolaContext);
  const { role, address } = polaContext.store;

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
                Popular Courses ////// Current Role is: {role}
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
          </Col>
        </Row>
      </div>
    </Content>
  );
};
export default Home;
