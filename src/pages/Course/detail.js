import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import courseData from '../../components/coursesData';
import PolaContext from '../../components/context';
import {React, Modal, useContext} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    method: 'GET', //totally for mock
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

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
            <Col span={12}>
                <Row>
                    <Col span={24}>
                    <ReactPlayer
                        className='react-player'
                        url='https://vimeo.com/243556536'
                        width='100%'
                        playing={false}
                        controls
                    />
                    </Col>
                    <Col span={24}>
                    Description
                    </Col>
                    <Col span={24}>
                        <p>
                            Before exploring the various drawbacks 
                            from this pitfall, it's worth understanding
                            the beginning to end of a design agency's jo
                            urney. It often starts with the RfQ (request for quotation) where the cl
                            ient provides a brief and requests a quote from the agency. 
                            In the instance the agency wins the bid, 
                            the SoW (Statement of Work) is signed. This kick starts a 
                            back and forth process where the agency executes the selected 
                            piece of work and then hands it back to the client for review and feedback. 
                        </p>
                    </Col>
                </Row>
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
            <Col span={12}>
                <Row>
                    <Col span={24}>
                        Assignment1
                    </Col>
                    <Col span={24}>
                        <p>
                        This is a group assignment and each group should have SEVEN (minimum FIVE) members. 
If you hope to form a group with more or less members, you should first consult with the 
course coordinator in written form. Each group member must contribute to the assignment 
equally  and  the  members  will  be  awarded  the  same  marks.  Under  certain  circumstances, 
adjustment  of  marks  may  happen  to  group  members  at  the  discretion  of  the  course 
coordinator.  
                        </p>
                    </Col>
                    <Col span={24}>
                    <Dragger {...props} style={{ marginTop: '40px', marginBottom: '40px' }}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                    </Dragger>
                    </Col>
                </Row>
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