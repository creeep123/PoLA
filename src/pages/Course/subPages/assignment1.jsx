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

function Assignment1() {
    return(
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
    )
}
export default Assignment1;