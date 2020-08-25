import React from 'react'
import {Jumbotron, Row, Col, Card, Table} from 'react-bootstrap'

function HeroAveragesDisplay(props) {
    return (
        <Jumbotron>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.heroForPageImg} />
                        <Card.Body>
                            <Card.Title>{props.heroForPageName}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Table>
                        <tbody>
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
                            <tr>
                                <th>TEAM</th>
                                <td>{props.teammateImgs}</td>
                            </tr>
                            <tr>
                                <th>ITEMS</th>
                                <td>{props.itemImgs}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Jumbotron>
        /* <ul>
            <li>{props.heroForPageImg}</li>
            <li>{props.killAvg}</li>
            <li>{props.deathAvg}</li>
            <li>{props.assistAvg}</li>
            <li>{props.netWorthAvg}</li>
            <li>{props.heroDmgAvg}</li>
            <li>{props.bldDmgAvg}</li>
            <li>{props.heroHealAvg}</li>
            <li>{props.lastHitAvg}</li>
            <li>{props.deniesAvg}</li>
            <li>{props.gpmAvg}</li>
            <li>{props.xpmAvg}</li>
            <li>{props.teammateImgs}</li>
            <li>{props.itemImgs}</li>
        </ul> */
    )
}

export default HeroAveragesDisplay