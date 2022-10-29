import { Row,Col } from 'antd';
import ReactPlayer from 'react-player';
import {React} from 'react';


function Week1() {
    return(
        <Row>
            <Col span={24}>
                    <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/3e1bjjFurLA'
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
    )
}
export default Week1;