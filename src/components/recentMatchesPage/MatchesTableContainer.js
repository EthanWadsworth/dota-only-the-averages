import React from 'react'
import {Table} from 'react-bootstrap'
import MatchTableRow from './MatchTableRow'

function MatchesTableContainer(props) {

    // maps each of the 25 matches passed in to individual chart rows with the 10 correct hero names stored in heroNames
    const createMatchTable = () => {
        return props.matches.map(match => {
            let direTeam = [];
            let radiantTeam = [];
            match.players.forEach(player => {
                const found = props.heroData.find(hero => player.hero_id === hero.id)
                if (found && player.player_slot < 128) {
                    radiantTeam.push(found.name)
                } else if (found && player.player_slot >= 128) {
                    direTeam.push(found.name)
                }
            })
            // let heroNames = match.players.map(player => {
            //     const found = props.heroData.find(hero => player.hero_id === hero.id)
            //     if (!found) {
            //         return // fix later
            //     }
            //     return found.name
            // })
            return <MatchTableRow key={match.match_id} match={match} heroNames={radiantTeam.concat(direTeam)}/>
        })
    }

    return (
        <div>
        <Table style={{tableLayout: "auto"}} responsive="md">
            <thead>
                <tr>
                    <th>Match ID</th>
                    <th>DUR</th>
                    <th>R/D</th>
                    <th>Radiant Heroes</th>
                    <th>Dire Heroes</th>
                </tr>
            </thead>
            <tbody>
                {createMatchTable()}
            </tbody>
        </Table>
    </div>
    )
}

export default MatchesTableContainer