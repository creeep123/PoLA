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
const Course = () => {
  return (
    <Content
      style={{
        margin: '0 16px',
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        <Col span={14}>
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
      </div>
    </Content>
  );
};

export default Course;
