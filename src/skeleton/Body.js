import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import Background from './Background'
import '../App.css';

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col>
                        <Background/>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </div>
        )
    }
}
