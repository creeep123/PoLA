import { Tabs,Layout,Row,Col,Menu,Form,Input,Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {React, Modal, useContext, useState} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { Dragger } = Upload;


function Grading1() {
    const [Name, setName] = useState('Xiang Luo');
    const [Answer, setAnswer] = useState("I don't know.");
    
    return(
        <Row>
                    <Col span={24}>
                        Exam1
                    </Col>
                    <Col span={24}>
                    <Form
                        layout="vertical"
                    >
                        <Form.Item label="1. What's your name?">
                            <Input 
                                onChange={event => setName(event.target.value)}
                                value={Name}
                            />
                        </Form.Item>
                        <Form.Item label="2. Prove the existence of aliens.">
                            <TextArea 
                                rows={6} 
                                cols={1200}
                                onChange={event => setAnswer(event.target.value)}
                                value={Answer}
                            />
                        </Form.Item>
                    </Form>
                    </Col>
                </Row>
    )
}
export default Grading1;