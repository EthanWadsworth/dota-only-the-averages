import React from 'react'
import Table from 'react-bootstrap/Table'
import ChartRow from './ChartRow'

function ChartContainer(props) {

    // handle the logic for both the radiant and dire tables 
    const heroTable = props.players.map(player => <ChartRow key={player.player_slot} player={player} />)

    // Each Table Row should be in the form of a tr with td in it
    // Hero K D A NetW LH DN GPM XPM DMG HEAL BLD WARDS ITEMS
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Lvl</th>
                        <th>K</th>
                        <th>D</th>
                        <th>A</th>
                        <th>Net</th>
                        <th>LH</th>
                        <th>DN</th>
                        <th>GPM</th>
                        <th>XPM</th>
                        <th>DMG</th>
                        <th>HEAL</th>
                        <th>BLD</th>
                    </tr>
                </thead>
                <tbody>
                    {heroTable}
                </tbody>
            </Table>
        </div>
    )
}

export default ChartContainer