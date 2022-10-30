import {
  Breadcrumb,
  Layout,
  Menu,
  Tabs,
  Row,
  Col,
  Button,
  message,
  Tag,
} from 'antd';
import React, { useState, useContext } from 'react';
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';
import PolaContext from '../../components/context';
const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const levels = ['a', 'b', 'c'];

const PolaPage = () => {
  const polaContext = useContext(PolaContext);
  const { points } = polaContext.store;

  const onChange = (key) => {
    console.log(key);
  };

  const [redeemed, setRedeemed] = useState(false);

  const renderTabHeader = (headerContent, points) => {
    return (
      <>
        {headerContent}&nbsp;&nbsp;
        <Tag color="blue">Points: {points}</Tag>
      </>
    );
  };

  const renderPolaItem = (level, date, mkey = 999) => {
    return (
      <Link to="detail">
        <div style={{ marginLeft: '24px' }} key={mkey}>
          <Row>
            <Col span={24}>
              <img src={require(`./assetes/PoLA-${level}.png`)} />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="pola-date-sub">
              {date == 8888 ? `Redeemed Today` : `Redeemed on 2022/10/${date}`}
            </Col>
          </Row>
          <Row>
            <Col span={24} className="pola-date-sub">
              <Button type="primary">Detail</Button>
            </Col>
          </Row>
        </div>
      </Link>
    );
  };

  const handleRedeem = () => {
    message.success('Redeem Success, points -10');
    setRedeemed(true);
    polaContext.setStore({
      ...polaContext.store,
      points: points-10
    })
  };

  const renderRedeemPolaItem = (level, redeemable = true, mkey = 999) => {
    return (
      <div style={{ marginLeft: '24px' }} key={mkey}>
        <Row>
          <Col span={24}>
            <img src={require(`./assetes/PoLA-${level}.png`)} />
          </Col>
        </Row>
        <Row>
          <Col span={24} className="pola-date-sub">
            <Button
              type="primary"
              shape="round"
              disabled={!redeemable}
              onClick={handleRedeem}
            >
              Redeem
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  const renderRedeemPola = (level) => {
    const randomPolaArray = () => {
      const randLength = Math.floor(Math.random() * 3) + 1;
      const polaArray = Array(randLength).fill(0);

      return polaArray.map((item, index) => {
        const randNum = Math.floor(Math.random() * 28) + 1;
        const randLevel = Math.floor(Math.random() * 3);
        return (
          <div style={{ marginLeft: '24px' }} key={index}>
            <Row>
              <Col span={24}>
                <img src={require(`./assetes/PoLA-${levels[randLevel]}.png`)} />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="pola-date-sub">
                Redeemed on 2022/10/{randNum}
              </Col>
            </Row>
          </div>
        );
      });
    };

    return (
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header={renderTabHeader('Design Thinking', points)} key="1">
          <div style={{ display: 'flex' }}>
            {renderRedeemPolaItem('c', false)}
            {renderRedeemPolaItem('b', !redeemed)}
            {renderRedeemPolaItem('a', false)}
          </div>
        </Panel>
        <Panel header="Analog photography" key="2">
          <div style={{ display: 'flex' }}>{randomPolaArray()}</div>
        </Panel>
        <Panel header="Master Instagram" key="3">
          <div style={{ display: 'flex' }}>{randomPolaArray()}</div>
        </Panel>
        <Panel header="Appreciation of Film Art" key="3">
          <div style={{ display: 'flex' }}>{randomPolaArray()}</div>
        </Panel>
      </Collapse>
    );
  };

  const renderMyPola = (level) => {
    const randomPolaArray = () => {
      const randLength = Math.floor(Math.random() * 3) + 1;
      const polaArray = Array(randLength).fill(0);

      return polaArray.map((item, index) => {
        const randNum = Math.floor(Math.random() * 28) + 1;
        const randLevel = Math.floor(Math.random() * 3);
        return renderPolaItem(levels[randLevel], randNum, index);
      });
    };

    return (
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header={'Design Thinking'} key="1">
          <div style={{ display: 'flex' }}>
            {renderPolaItem('c', '22')}
            {redeemed ? renderPolaItem('b', '8888') : ''}
          </div>
        </Panel>
        <Panel header="Analog photography" key="2">
          <div style={{ display: 'flex' }}>{randomPolaArray()}</div>
        </Panel>
        <Panel header="Master Instagram" key="3">
          <div style={{ display: 'flex' }}>{randomPolaArray()}</div>
        </Panel>
        <Panel header="Appreciation of Film Art" key="3">
          <div style={{ display: 'flex' }}>{randomPolaArray()}</div>
        </Panel>
      </Collapse>
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
          onChange={onChange}
          items={[
            {
              label: `My PoLA`,
              key: '1',
              children: renderMyPola(),
            },
            {
              label: `Redeem PoLA`,
              key: '2',
              children: renderRedeemPola(),
            },
          ]}
        />
      </div>
    </Content>
  );
};

export default PolaPage;
