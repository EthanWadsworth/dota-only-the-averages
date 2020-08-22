import React from 'react'

// might change to just handling the chart in a single component and the dropdown in another single component
function ChartRow(props) {
    // {hero_id, kills, deaths, assists, last_hits, denies, gold_per_min, xp_per_min, level} = props.player
    // Hero K D A NetW LH DN GPM XPM DMG HEAL BLD WARDS ITEMS
    return (
        <tr>
            <td>{props.player.level}</td>
            <td>{props.player.kills}</td>
            <td>{props.player.deaths}</td>
            <td>{props.player.assists}</td>
            <td>{props.player.gold + props.player.gold_spent}</td>
            <td>{props.player.last_hits}</td>
            <td>{props.player.denies}</td>
            <td>{props.player.gold_per_min}</td>
            <td>{props.player.xp_per_min}</td>
            <td>{props.player.hero_damage}</td>
            <td>{props.player.hero_healing}</td>
            <td>{props.player.tower_damage}</td>
        </tr>
    )

}

export default ChartRow