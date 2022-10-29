import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {React, Modal, useContext, useState} from 'react';
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

function Assignment2() {
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
    )
}
export default Assignment2;