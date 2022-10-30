import { Tabs,Layout,Row,Col,Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Link, redirect, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {React, Modal, useContext, useState} from 'react';
import { InboxOutlined, CameraOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

function Information1() {
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
                </Row>
    )
}
export default Information1;