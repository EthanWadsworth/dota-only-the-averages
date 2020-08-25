import React from 'react'

function HeroAveragesDisplay(props) {
    return (
        <ul>
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
        </ul>
    )
}

export default HeroAveragesDisplay