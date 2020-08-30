import React from 'react'
import {Jumbotron, Row, Col, Card, Table} from 'react-bootstrap'
import './styles/recentMatchesPageStyles.css'

function HeroAveragesDisplay(props) {
    return (
        <Jumbotron className="averagesContainer page-container">
            <Row>
                <Col md={6}>
                    <Card style={{ width: '90%' }}>
                        <Card.Img variant="top" src={props.heroForPageImg} />
                        <Card.Body>
                            <Card.Title>{props.heroForPageName}</Card.Title>
                            <h3>Common Team Members</h3>
                            <span>{props.teammateImgs}</span>
                            <h3>Common Items</h3>
                            <span>{props.itemImgs}</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Table className="recentMatchesTable page-container">
                        <tbody>
                            <tr>
                                <th>Win %</th>
                                <td>{props.winAvg}</td>
                            </tr>
                            <tr>
                                <th>Kills</th>
                                <td>{props.killAvg}</td>
                            </tr>
                            <tr>
                                <th>Deaths</th>
                                <td>{props.deathAvg}</td>
                            </tr>
                            <tr>
                                <th>Assists</th>
                                <td>{props.assistAvg}</td>
                            </tr>
                            <tr>
                                <th>NetW</th>
                                <td>{props.netWorthAvg}</td>
                            </tr>
                            <tr>
                                <th>DMG</th>
                                <td>{props.heroDmgAvg}</td>
                            </tr>
                            <tr>
                                <th>BLD</th>
                                <td>{props.bldDmgAvg}</td>
                            </tr>
                            <tr>
                                <th>HEAL</th>
                                <td>{props.heroHealAvg}</td>
                            </tr>
                            <tr>
                                <th>LH</th>
                                <td>{props.lastHitAvg}</td>
                            </tr>
                            <tr>
                                <th>DN</th>
                                <td>{props.deniesAvg}</td>
                            </tr>
                            <tr>
                                <th>GPM</th>
                                <td>{props.gpmAvg}</td>
                            </tr>
                            <tr>
                                <th>XPM</th>
                                <td>{props.xpmAvg}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default HeroAveragesDisplay