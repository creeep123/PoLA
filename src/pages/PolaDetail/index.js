import { Button, Layout } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom' ;
import { Upload, Tabs, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
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
              paddingLeft: '72px',
            }}
          >
            <img src={require('./assets/PoLA-c.png')}></img>
          </Col>
          <Col span={12}>
              course code, course name, teaching team, start date, end data and level
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
