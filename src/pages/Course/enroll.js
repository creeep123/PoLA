import { Avatar, Button, Tag, Card, Layout, Col, Row, message } from 'antd';
import React, { useContext } from 'react';
import { Link, redirect, useParams } from 'react-router-dom';
import courseData from '../../components/coursesData';
import PolaContext from '../../components/context';

const { Header, Footer, Sider, Content } = Layout;
const Enroll = () => {
  const polaContext = useContext(PolaContext);
  const { enrolledCourses, userName } = polaContext.store;

  const { courseName } = useParams();
  const currentCourseData = courseData.filter(
    (item) => item.courseName === courseName
  )[0];
  const { teacher } = currentCourseData;

  return (
    <Layout>
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
          <Row gutter={[32, 32]}>
            <Col span={24}>
              <Col span={24}>
                <Row justify="space-around" align="middle">
                  <Col span={4}>
                    <img
                      key={courseName}
                      width="100%"
                      // src={require('./assets/courseicon.jpg')}
                      src={
                        courseName === 'Design Thinking'
                          ? require('./assets/courseicon.jpg')
                          : 'https://random.imagecdn.app/300/300'
                      }
                      alt="courseicon"
                    ></img>
                  </Col>
                  <Col span={10}>
                    <Card
                      title={courseName}
                      bordered={false}
                      style={{ width: '100%', height: 200 }}
                    >
                      <p>
                        <Tag>Design</Tag>
                        <Tag>Document</Tag>
                        <Tag>User Research</Tag>
                      </p>
                      <p>&nbsp;</p>
                      <Link to={`/course/detail/${courseName}`}>
                        <Button
                          type="primary"
                          shape="round"
                          onClick={() => {
                            polaContext.setStore({
                              ...polaContext.store,
                              enrolledCourses: [...enrolledCourses, courseName],
                            });
                            if (userName !== 'Mark Zuckerberg' && !enrolledCourses.includes(courseName)) {
                              message.success(
                                `Enrolled ${courseName} successfully!`
                              );
                            }
                          }}
                        >
                          {enrolledCourses.includes(courseName) ||
                          userName === 'Mark Zuckerberg'
                            ? 'View Course'
                            : 'Enroll'}
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="space-around" align="middle">
                  <Col span={4}>
                    <div>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                      {teacher}
                    </div>
                  </Col>
                  <Col flex="" span={10}></Col>
                </Row>
              </Col>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={24}>What you will learn:</Col>
                <Col span={24}>
                  <img
                    width="100%"
                    src={require('./assets/whatToLearn.jpg')}
                    alt="whattolearn"
                  ></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
export default Enroll;
