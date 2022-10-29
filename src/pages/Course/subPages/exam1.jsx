import { Tabs,Layout,Row,Col,Menu,Form,Input,Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {React, Modal, useContext, useState} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { Dragger } = Upload;


function Exam1() {
    const onCheck = async () => {
        try {
          console.log('Success:');
        } catch (errorInfo) {
          console.log('Failed:');
        }
      };
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
                            <Input />
                        </Form.Item>
                        <Form.Item label="2. Prove the existence of aliens.">
                            <TextArea rows={6} cols={1200}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={onCheck}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    </Col>
                </Row>
    )
}
export default Exam1;