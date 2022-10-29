import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import Week1 from './subPages/week1';
import Week2 from './subPages/week2';
import Week3 from './subPages/week3';
import Assignment1 from './subPages/assignment1';
import Assignment2 from './subPages/assignment2';
import CommentList1 from './subPages/commentList1';
import CommentList2 from './subPages/commentList2';
import CommentList3 from './subPages/commentList3';
import courseData from '../../components/coursesData';
import PolaContext from '../../components/context';
import {React, Modal, useContext, useState} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

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
    const [current,setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    let detailLecture;
    if (current=='1'){
        detailLecture = <Week1></Week1>;
    } else if (current=='2'){
        detailLecture = <Week2></Week2>;
    } else if (current=='3'){
        detailLecture = <Week3></Week3>;
    }
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
            <Col span={12}>
                {detailLecture}
            </Col>
        </Row>
    )
}

const Assignment = (level) => {
    const items = [
        getItem('Assignment 1', '1'),
        getItem('Assignment 2', '2'),
        getItem('Exam 1', '3'),
    ];
    const [current,setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    let detailAssignment;
    if (current=='1'){
        detailAssignment = <Assignment1></Assignment1>;
    } else if (current=='2'){
        detailAssignment = <Assignment2></Assignment2>;
    }
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
            <Col span={12}>
                {detailAssignment}
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
    const [current,setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    let detailDiscussion;
    if (current=='1'){
        detailDiscussion = <CommentList1></CommentList1>;
    } else if (current=='2'){
        detailDiscussion = <CommentList2></CommentList2>;
    } else if (current=='3'){
        detailDiscussion = <CommentList3></CommentList3>;
    }

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
            <Col span={18} style={{overflow:"auto", height:"560px"}}>
                {detailDiscussion}
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