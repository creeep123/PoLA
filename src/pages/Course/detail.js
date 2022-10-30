import { Tabs, Layout, Row, Col, Menu, Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import Week1 from './subPages/week1';
import Week2 from './subPages/week2';
import Week3 from './subPages/week3';
import Assignment1 from './subPages/assignment1';
import Assignment2 from './subPages/assignment2';
import Exam1 from './subPages/exam1';
import CommentList1 from './subPages/commentList1';
import CommentList2 from './subPages/commentList2';
import CommentList3 from './subPages/commentList3';
import Information1 from './subPages/information1';
import Information2 from './subPages/information2';
import Information3 from './subPages/information3';
import Grading1 from './subPages/grading1';
import Grading2 from './subPages/grading2';
import Grading3 from './subPages/grading3';
import courseData from '../../components/coursesData';
import PolaContext from '../../components/context';
import { React, Modal, useContext, useState } from 'react';
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
  const { courseName } = useParams();
  const polaContext = useContext(PolaContext);
  const { role, address } = polaContext.store;
  const [items, setItem] = useState([
    getItem('Week1', '1'),
    getItem('Week2', '2'),
  ]);
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const [URL, setURL] = useState('https://www.youtube.com/watch?v=o06qqMh_Vao');
  const [Description, setDescription] = useState(
    "Rishi Sunak has made make his first address outside Downing Street after formally being appointed the UK's new prime minister. He has taken over from Liz Truss who was the country's shortest-serving PM. "
  );

  const handleSubmit = (event) => {
    message.success('Submited Successfully');
    setItem((items) => [...items, getItem('Week3', '3')]);
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setURL('');
    setDescription('');
  };
  let detailLecture;
  if (current == '1') {
    detailLecture = <Week1></Week1>;
  } else if (current == '2') {
    detailLecture = <Week2></Week2>;
  } else if (current == '3') {
    detailLecture = <Week3></Week3>;
  }
  return (
    <Row>
      <Col span={5}>
        <Row>
          <Col span={24}>
            <img
              width="25%"
              src={require('./assets/courseicon.jpg')}
              alt="courseicon"
            ></img>
          </Col>
          <Col span={24}>{courseName}</Col>
          <Col span={24}>
            <Menu
              onClick={onClick}
              style={{
                width: 216,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Col>
        </Row>
      </Col>
      <Col span={13}>{detailLecture}</Col>
      <Col span={6}>
        {role === 'teacher' ? (
          <Row justify="space-around">
            <Col span={20}>Upload New Video</Col>
            <Col span={20}>
              <Form layout="vertical">
                <Form.Item label="1. Please put in the URL.">
                  <Input
                    onChange={(event) => setURL(event.target.value)}
                    value={URL}
                  />
                </Form.Item>
                <Form.Item label="2. Please put in the description.">
                  <TextArea
                    rows={6}
                    cols={1200}
                    onChange={(event) => setDescription(event.target.value)}
                    value={Description}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        ) : null}
      </Col>
    </Row>
  );
};

const Assignment = (level) => {
  const items = [
    getItem('Assignment 1', '1'),
    getItem('Assignment 2', '2'),
    getItem('Exam 1', '3'),
  ];
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  let detailAssignment;
  if (current == '1') {
    detailAssignment = <Assignment1></Assignment1>;
  } else if (current == '2') {
    detailAssignment = <Assignment2></Assignment2>;
  } else if (current == '3') {
    detailAssignment = <Exam1></Exam1>;
  }
  return (
    <Row>
      <Col span={5}>
        <Row>
          <Col span={24}>Assignments</Col>
          <Col span={24}>
            <Menu
              onClick={onClick}
              style={{
                width: 216,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Col>
        </Row>
      </Col>
      <Col span={13}>{detailAssignment}</Col>
    </Row>
  );
};

const Discussion = (level) => {
  const items = [
    getItem('Question about assigment 1', '1'),
    getItem('Question about assigment 2', '2'),
    getItem('Question about assigment 3', '3'),
  ];
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  let detailDiscussion;
  if (current == '1') {
    detailDiscussion = <CommentList1></CommentList1>;
  } else if (current == '2') {
    detailDiscussion = <CommentList2></CommentList2>;
  } else if (current == '3') {
    detailDiscussion = <CommentList3></CommentList3>;
  }

  return (
    <Row>
      <Col span={5}>
        <Row>
          <Col span={24}>Discussion</Col>
          <Col span={24}>
            <Menu
              onClick={onClick}
              style={{
                width: 216,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Col>
        </Row>
      </Col>
      <Col span={19} style={{ overflow: 'auto', height: '560px' }}>
        {detailDiscussion}
      </Col>
    </Row>
  );
};

const Information = (level) => {
  const polaContext = useContext(PolaContext);
  const { role, address } = polaContext.store;
  const [items, setItem] = useState([
    getItem('Assignment1', '1'),
    getItem('Assignment2', '2'),
  ]);
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const [TaskName, setTaskName] = useState('Exam1');
  const [Description, setDescription] = useState('It is our first exam.');

  const handleSubmit = (event) => {
    message.success('Submited Successfully');
    setItem((items) => [...items, getItem('Exam1', '3')]);
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setTaskName('');
    setDescription('');
  };
  let detailInformation;
  if (current == '1') {
    detailInformation = <Information1></Information1>;
  } else if (current == '2') {
    detailInformation = <Information2></Information2>;
  } else if (current == '3') {
    detailInformation = <Information3></Information3>;
  }
  return (
    <Row>
      <Col span={5}>
        <Row>
          <Col span={24}>
            <img
              width="25%"
              src={require('./assets/courseicon.jpg')}
              alt="courseicon"
            ></img>
          </Col>
          <Col span={24}>Design Thinking</Col>
          <Col span={24}>
            <Menu
              onClick={onClick}
              style={{
                width: 216,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Col>
        </Row>
      </Col>
      <Col span={13}>{detailInformation}</Col>
      {role === 'teacher' ? (
        <Col span={6}>
          <Row justify="space-around">
            <Col span={20}>Upload Task Information</Col>
            <Col span={20}>
              <Form layout="vertical">
                <Form.Item label="1. Please put in the task name.">
                  <Input
                    onChange={(event) => setTaskName(event.target.value)}
                    value={TaskName}
                  />
                </Form.Item>
                <Form.Item label="2. Please put in the description.">
                  <TextArea
                    rows={6}
                    cols={1200}
                    onChange={(event) => setDescription(event.target.value)}
                    value={Description}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      ) : null}
    </Row>
  );
};

const Grading = (level) => {
  const [Grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    message.success('Submited Successfully');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setGrade('');
  };
  const items = [
    getItem('Student 1', '1'),
    getItem('Student 2', '2'),
    getItem('Student 3', '3'),
  ];
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  let detailGrading;
  if (current == '1') {
    detailGrading = <Grading1></Grading1>;
  } else if (current == '2') {
    detailGrading = <Grading2></Grading2>;
  } else if (current == '3') {
    detailGrading = <Grading3></Grading3>;
  }
  return (
    <Row>
      <Col span={5}>
        <Row>
          <Col span={24}>Assignments</Col>
          <Col span={24}>
            <Menu
              onClick={onClick}
              style={{
                width: 216,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Col>
        </Row>
      </Col>
      <Col span={13}>{detailGrading}</Col>
      <Col span={6}>
        <Row justify="space-around">
          <Col span={20}>Grading</Col>
          <Col span={20}>
            <Form layout="vertical">
              <Form.Item label="Please put in the point.">
                <Input
                  onChange={(event) => setGrade(event.target.value)}
                  value={Grade}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const Detail = () => {
  const polaContext = useContext(PolaContext);
  const { role, address } = polaContext.store;
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
                label: role === 'student' ? 'Assignment' : '',
                key: '2',
                children: Assignment(),
              },
              {
                label: `Discussion`,
                key: '3',
                children: Discussion(),
              },
              {
                label: `Information`,
                key: '4',
                children: Information(),
              },
              {
                label: role === 'teacher' ? 'Grading' : '',
                key: '5',
                children: Grading(),
              },
            ]}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Detail;
