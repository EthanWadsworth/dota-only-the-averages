import React from 'react'
import MainNavbar from '../MainNavbar'
import {Container, Row, Col} from 'react-bootstrap'
import icon from './../../logo_red.png'
import jugg_icon from './../../Juggernaut_minimap_icon.png'
import placeholder from './../../Minimap_7.23.png'
import './styles/homePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClock } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    return (
        <div>
            <MainNavbar />
            <div className="homepage">
                <div className="logo-container">
                    <div className="logo-start-formatter">
                        <h1 className="logo-start">D</h1>
                        <img className="icon" src={icon} alt='logo'></img>
                    </div>
                    <h4 className="logo-text">OTAverages</h4>
                </div>
            </div>
            <div>
            <Container>
                <Row className="about-container">
                    <Col md={4}>
                        <div className="info-container fade-in">
                            <FontAwesomeIcon icon={faSearch}/>
                            <h2>Seach by Match ID</h2>
                            <p>Find matches by ID for more in-depth game results while away from the Dota client</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="info-container fade-in">
                            <img className="hero-icon" src={jugg_icon} alt=""></img>
                            <h2>Filter by hero</h2>
                            <p>Search by hero to find recent matches where the hero was played</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="info-container fade-in">
                            <FontAwesomeIcon icon={faClock} /> 
                            <h2>Real-Time Averages</h2>
                            <p>Get updated hero averages based on recent high-level matches as they occur</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>

        // changes made 
        // <div>
        //     <div>Title Container</div>
        //     <Row>
        //         <Col lg={6}>
        //             <div>
        //                 <img src={placeholder} alt=''></img>
        //             </div>
        //         </Col>
        //         <Col lg={6}>
        //             <p>Info 1</p>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col lg={6}>
        //             <p>Info 2</p>
        //         </Col>
        //         <Col lg={6}>
        //             <img src={placeholder} alt=''></img>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col lg={6}>
        //             <img src={placeholder} alt=''></img>
        //         </Col>
        //         <Col lg={6}>
        //             <p>Info 3</p>
        //         </Col>
        //     </Row>
        // </div>
    )
}

export default HomePage