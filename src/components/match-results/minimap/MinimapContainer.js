import React from 'react'
import minimap from '../../../Minimap_7.23.png'
import './styles/minimap.css'
import {barracksStatus, buildingStatus} from './../../../scripts/buildingStatusUnpacker'

function MinimapContainer(props) {
    // return <div><img src={minimap} alt={''} style={{width: "300px", height: "287px"}}/></div>
    // getting team building status
    const radiantBuildingStatus = buildingStatus(props.tower_status_radiant)
    const radiantBarracksStatus = barracksStatus(props.barracks_status_radiant)
    const direBuildingStatus = buildingStatus(props.tower_status_dire)
    const direBarracksStatus = barracksStatus(props.barracks_status_dire)
    return (
        <div id="minimapHandler">
        {/* <h3>Building Status</h3> */}
        <div id="minimapContainer">
            <img id="minimap" src={minimap} alt={'dota2 minimap'}/>
            <div>
                <div className={radiantBuildingStatus.topT1 ? "circle radiant" : "circle gray-radiant"} id="radiantTopTowerT1"></div>
                <div className={radiantBuildingStatus.topT2 ? "circle radiant" : "circle gray-radiant"} id="radiantTopTowerT2"></div>
                <div className={radiantBuildingStatus.topT3 ? "circle radiant" : "circle gray-radiant"} id="radiantTopTowerT3"></div>
                <div className={radiantBuildingStatus.midT1 ? "circle radiant" : "circle gray-radiant"} id="radiantMidTowerT1"></div>
                <div className={radiantBuildingStatus.midT2 ? "circle radiant" : "circle gray-radiant"} id="radiantMidTowerT2"></div>
                <div className={radiantBuildingStatus.midT3 ? "circle radiant" : "circle gray-radiant"} id="radiantMidTowerT3"></div>
                <div className={radiantBuildingStatus.botT1 ? "circle radiant" : "circle gray-radiant"} id="radiantBotTowerT1"></div>
                <div className={radiantBuildingStatus.botT2 ? "circle radiant" : "circle gray-radiant"} id="radiantBotTowerT2"></div>
                <div className={radiantBuildingStatus.botT3 ? "circle radiant" : "circle gray-radiant"} id="radiantBotTowerT3"></div>
                <div className={radiantBuildingStatus.ancientTop ? "circle radiant" : "circle gray-radiant"} id="radiantBaseTowerLeft"></div>
                <div className={radiantBuildingStatus.ancientBot ? "circle radiant" : "circle gray-radiant"} id="radiantBaseTowerRight"></div>
        
                <div className={direBuildingStatus.topT1 ? "circle dire" : "circle gray-dire"} id="direTopTowerT1"></div>
                <div className={direBuildingStatus.topT2 ? "circle dire" : "circle gray-dire"} id="direTopTowerT2"></div>
                <div className={direBuildingStatus.topT3 ? "circle dire" : "circle gray-dire"} id="direTopTowerT3"></div>
                <div className={direBuildingStatus.midT1 ? "circle dire" : "circle gray-dire"} id="direMidTowerT1"></div>
                <div className={direBuildingStatus.midT2 ? "circle dire" : "circle gray-dire"} id="direMidTowerT2"></div>
                <div className={direBuildingStatus.midT3 ? "circle dire" : "circle gray-dire"} id="direMidTowerT3"></div>
                <div className={direBuildingStatus.botT1 ? "circle dire" : "circle gray-dire"} id="direBotTowerT1"></div>
                <div className={direBuildingStatus.botT2 ? "circle dire" : "circle gray-dire"} id="direBotTowerT2"></div>
                <div className={direBuildingStatus.botT3 ? "circle dire" : "circle gray-dire"} id="direBotTowerT3"></div>
                <div className={direBuildingStatus.ancientTop ? "circle dire" : "circle gray-dire"} id="direBaseTowerLeft"></div>
                <div className={direBuildingStatus.ancientBot ? "circle dire" : "circle gray-dire"} id="direBaseTowerRight"></div>
        
                <div className={radiantBarracksStatus.midRanged ? "radiant-triangle-topright": "gray-topright"} id="radiantMidRacksLeft"></div>
                <div className={radiantBarracksStatus.midMelee ? "radiant-triangle-topright": "gray-topright"} id="radiantMidRacksRight"></div>
                <div className={radiantBarracksStatus.botRanged ? "radiant-triangle-right" : "gray-right"} id="radiantBotRacksLeft"></div>
                <div className={radiantBarracksStatus.botMelee ? "radiant-triangle-right" : "gray-right"} id="radiantBotRacksRight"></div>
                <div className={radiantBarracksStatus.topRanged ? "radiant-triangle-up" : "gray-up"} id="radiantTopRacksLeft"></div>
                <div className={radiantBarracksStatus.topMelee ? "radiant-triangle-up" : "gray-up"} id="radiantTopRacksRight"></div>

                <div className={direBarracksStatus.midRanged ? "triangle-bottomleft" : "gray-bottomleft"} id="direMidRacksLeft"></div>
                <div className={direBarracksStatus.midMelee ? "triangle-bottomleft" : "gray-bottomleft"} id="direMidRacksRight"></div>
                <div className={direBarracksStatus.botRanged ? "triangle-down" : "gray-down"} id="direBotRacksLeft"></div>
                <div className={direBarracksStatus.botMelee ? "triangle-down" : "gray-down"} id="direBotRacksRight"></div>
                <div className={direBarracksStatus.topRanged ? "triangle-left" : "gray-left"} id="direTopRacksLeft"></div>
                <div className={direBarracksStatus.topMelee ? "triangle-left" : "gray-left"} id="direTopRacksRight"></div>

                <div className={props.winningTeam ? "radiant square" : "square gray-radiant"} id="radiantAncient"></div>
                <div className={!props.winningTeam ? "dire square" : "square gray-dire"} id="direAncient"></div>
            </div>
        </div>
        </div>
    )
}

export default MinimapContainer