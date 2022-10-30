import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {React, Modal, useContext, useState} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

function Information2() {
    return(
        <Row>
                    <Col span={24}>
                        Assignment2
                    </Col>
                    <Col span={24}>
                        <p>
                        Camera and Location are two of the most frequently used sensors on an 
Android device. In this assignment, you are required to write an app that 
enables the user to take a video or photo and then upload it to Google's 
Firebase cloud server for backup. The main feature of the app should include 
the following;  
                        </p>
                    </Col>
                </Row>
    )
}
export default Information2;