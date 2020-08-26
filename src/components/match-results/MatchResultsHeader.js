import React from 'react'

function MatchResultsHeader(props) {

    const calcMatchDuration = () => {
        return Math.floor(props.duration/60) + ":" + String(props.duration % 60).padStart(2, '0')
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>{props.radiantWin ? "Radiant" : "Dire"} Victory</h1>
            <p><span>{props.radiantScore}</span> <span>{props.direScore}</span></p>
            <p>{calcMatchDuration()}</p>
        </div>
    )
}

export default MatchResultsHeader