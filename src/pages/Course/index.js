import { Layout } from 'antd';
import { Col, Row } from 'antd';
import CourseList from '../../components/courseList';
import React from 'react';
import { useContext } from 'react';
import PolaContext from '../../components/context';
const { Content } = Layout;
const Course = () => {
  const polaContext = useContext(PolaContext);
  const { role } = polaContext.store;
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
          minHeight:"672px",
        }}
      >
        <Col span={14}>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24} className="pola-title">
              {role==="student"?'Enrolled Courses':"Published courses"}
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
