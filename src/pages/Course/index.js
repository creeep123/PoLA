import { Layout, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Col, Row, Button, Form, Input } from 'antd';
import CourseList from '../../components/courseList';
import React from 'react';
import { useContext, useState } from 'react';
import PolaContext from '../../components/context';
const { Content } = Layout;
const Course = () => {
  const [description, setDescription] = useState('');
  const [newCourseName, setNewCourseName] = useState('');
  const polaContext = useContext(PolaContext);
  const { role, allCourses } = polaContext.store;

  const handlePublish = () => {
    polaContext.setStore({
      ...polaContext.store,
      allCourses: [
        ...allCourses,
        { courseName: newCourseName, teacher: 'Mark Zuckerberg' },
      ],
    });
    message.success(`Publish ${newCourseName} Successfully`);
    setNewCourseName('');
    setDescription('');
  };

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
          minHeight: '672px',
        }}
      >
        <Col span={24}>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24} className="pola-title">
              {role === 'student' ? 'Enrolled Courses' : 'Published courses'}
            </Col>
          </Row>
          <Row>
            <Col span={14}>
              <CourseList></CourseList>
            </Col>
            <Col
              span={10}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Row justify="space-around">
                <Col span={20}>Publish New Course</Col>
                <Col span={20}>
                  <Form layout="vertical">
                    <Form.Item label="1. Please put in the new course name.">
                      <Input
                        onChange={(event) =>
                          setNewCourseName(event.target.value)
                        }
                        value={newCourseName}
                      />
                    </Form.Item>
                    <Form.Item label="2. Please put in the description.">
                      <TextArea
                        rows={6}
                        cols={1200}
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" onClick={handlePublish}>
                        Publish
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </Content>
  );
};

export default Course;
