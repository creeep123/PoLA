import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}
const onChange = (key) => {
    console.log(key);
};


const Lecture = (level) => {
    const items = [
        getItem('Week 1', '1'),
        getItem('Week 2', '2'),
        getItem('Week 3', '3'),
    ];
    const onClick = (e) => {
        console.log('click ', e);
      };
    return(
        <Row>
            <Col span={6}>
                <Row>
                    <Col span={24}>
                    <img
                    width= "25%"
                    src={require('./assets/courseicon.jpg')}
                    alt="courseicon"
                    ></img>
                    </Col>
                    <Col span={24}>
                        Design Thinking
                    </Col>
                    <Col span={24}>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                    </Col>
                </Row>
            </Col>
            <Col span={18}>
                <img
                    height= "100%"
                    src={require('./assets/lecture.jpg')}
                    alt="lecture"
                ></img>
            </Col>
        </Row>
    )
}

const Assignment = (level) => {
    const items = [
        getItem('Assignment 1', '1'),
        getItem('Assignment 2', '2'),
        getItem('Assignment 3', '3'),
    ];
    const onClick = (e) => {
        console.log('click ', e);
      };
    return(
        <Row>
            <Col span={6}>
                <Row>
                    <Col span={24}>
                        Assignments
                    </Col>
                    <Col span={24}>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                    </Col>
                </Row>
            </Col>
            <Col span={18}>
                <img
                    height= "100%"
                    src={require('./assets/assignments.jpg')}
                    alt="assignments"
                ></img>
            </Col>
        </Row>
    )
}

const Discussion = (level) => {
    const items = [
        getItem('Question about assigment 1', '1'),
        getItem('Question about assigment 2', '2'),
        getItem('Question about assigment 3', '3'),
    ];
    const onClick = (e) => {
        console.log('click ', e);
      };
    return(
        <Row>
            <Col span={6}>
                <Row>
                    <Col span={24}>
                        Discussion
                    </Col>
                    <Col span={24}>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                    </Col>
                </Row>
            </Col>
            <Col span={18}>
                <img
                    height= "100%"
                    src={require('./assets/Discussion.jpg')}
                    alt="Discussion"
                ></img>
            </Col>
        </Row>
    )
}


const Detail = () => {
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
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                {
                    label: `Leture`,
                    key: '1',
                    children: Lecture(),
                },
                {
                    label: `Assignment`,
                    key: '2',
                    children: Assignment(),
                },
                {
                    label: `Discussion`,
                    key: '3',
                    children: Discussion(),
                },
                ]}
            />
          </div>
          </Content>
        </Layout>
    )
  
};

export default Detail;