import { Row,Col } from 'antd';
import ReactPlayer from 'react-player';
import {React} from 'react';

function Week3() {
    return(
        <Row>
            <Col span={24}>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=o06qqMh_Vao'
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
                        Rishi Sunak has made make his first address outside Downing Street after formally being appointed the UK’s new prime minister. 
                        He has taken over from Liz Truss who was the country's shortest-serving PM. 
                        </p>
            </Col>
        </Row>
    )
}
export default Week3;