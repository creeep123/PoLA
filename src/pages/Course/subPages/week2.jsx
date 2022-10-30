import { Row,Col } from 'antd';
import ReactPlayer from 'react-player';
import {React} from 'react';

function Week2() {
    return(
        <Row>
            <Col span={24}>
                    <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/L3LMbpZIKhQ'
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
                        The closing meeting of the 20th CPC National Congress was held 
                        on Saturday (October 22). After the election of a new member of the
                         Central Committee and a member of the Central Commission for 
                         Discipline Inspection, Hu Jintao, a former Communist Party leader, 
                         left the venue with the help of two staff members, causing concern. 
                        </p>
            </Col>
        </Row>
    )
}
export default Week2;