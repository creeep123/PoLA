import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {React, Modal, useContext, useState} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

function Information3() {
    return(
        <Row>
                    <Col span={24}>
                        Exam1
                    </Col>
                    <Col span={24}>
                        <p>
                        It is our first exam.
                        </p>
                    </Col>
                </Row>
    )
}
export default Information3;