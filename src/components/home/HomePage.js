import React from 'react'
import MainNavbar from '../MainNavbar'
import {Container, Row, Col} from 'react-bootstrap'
import logo from './../../logo.png'

function HomePage() {
    return (
        <div>
            <MainNavbar />
            <Container>
            <img src={logo} alt={'logo'} />
            <div>
                <Row style={{background: "black"}}>
                    <Col>
                        Logo
                    </Col>
                    <Col>
                        Name
                    </Col>
                </Row>
            </div>
                <Row>
                    <Col sm={4}>
                        %
                    </Col>
                    <Col sm={4}>
                        25
                    </Col>
                    <Col sm={4}>
                        KDA
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage