import { Card, Button, Layout, Avatar } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Tabs, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Meta } = Card;
const { Dragger } = Upload;
const { Header, Content, Footer, Sider } = Layout;

const PolaDetailPage = () => {
  const renderPolaDetail = () => {
    return (
      <div className="pola-detail-page">
        <Row>
          <Link to="/pola">
            <Button
              style={{ margin: '32px auto auto 32px' }}
              shape="circle"
              icon={<ArrowLeftOutlined />}
            ></Button>
          </Link>
        </Row>
        <Row style={{ height: '500px' }}>
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '152px',
            }}
          >
            <img src={require('./assets/PoLA-c.png')}></img>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              style={{
                borderRadius: '14px',
                width: 480,
              }}
              cover={
                <img
                  alt="example"
                  style={{
                    borderRadius: '14px',
                  }}
                  src={require('./assets/PoLA-banner.png')}
                />
              }
            >
              <Meta
                title={`Design Thinking`}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                description="by Alan Walker"
              />
              <p>Start: 2022/07/02</p>
              <p>Finish: 2022/10/01</p>
              <p>Level: C</p>
            </Card>
          </Col>
        </Row>
      </div>
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
        <Tabs
          defaultActiveKey="1"
          // onChange={onChange}
          items={[
            {
              label: `My PoLA`,
              key: '1',
              children: renderPolaDetail(),
            },
            {
              label: `Redeem PoLA`,
              key: '2',
              children: 'Redeem PoLA',
            },
          ]}
        />
      </div>
    </Content>
  );
};
export default PolaDetailPage;
