import { Avatar, Button, Tag, Card, Layout, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const Enroll = () => {
    return(
    <Layout>
      <Content
        style={{
        margin: '0 16px',
        height: '100vh',
      }}>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        <Row gutter={[32,32]}>
          <Col span={24}>
          <Col span={24}>
            <Row justify='space-around' align='middle'>
            <Col span={4}>
                  <img
                    width= "100%"
                    src={require('./assets/courseicon.jpg')}
                    alt="courseicon"
                  ></img>
            </Col>
            <Col span={10}>
                  <Card title="Design Thinking" bordered={false} style={{ width: "100%", height: 200}}>
                    <p>
                      <Tag>Design</Tag>
                      <Tag>Document</Tag>
                      <Tag>User Research</Tag>
                    </p>
                    <p>&nbsp;</p>
                    <Link to='/course/detail'>
                      <Button type="primary" shape="round">
                        Enroll
                      </Button>
                    </Link>
                    
                  </Card>
            </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify='space-around' align='middle'>
              <Col span={4}>
                    <div>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    Valeri Jaiden
                    </div>
              </Col>
              <Col flex='' span={10}>
              </Col>
            </Row>
          </Col>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={24}>
                What you will learn:
              </Col>
              <Col span={24}>
              <img
                    width= "100%"
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