import React from 'react'
import {Table, Tab} from 'react-bootstrap'
import './styles/pickBanChartStyles.css'

function PickBanDisplay(props) {

    // add classnames to img and td tags
    // fix to add order and also split into radiant and dire lists
    // now add pick orders to each img
    let pickTracker = props.pickBansList.length - 1
    // const pickBanTableImgs = props.pickBanImgs.map(pickBan => <td>
    // <img className={pickBan.type} src={pickBan.heroIcon} alt={''} />
    // <p className={pickBan.type}>{pickBan.type}, {props.pickBansList.length - pickTracker--}</p>
    // </td>)

    // splits up into separate lists
    // let radiantHeroes = [];
    // let direHeroes = [];
    // let bannedHeroes = [];
    // props.pickBanImgs.forEach(pickBan => {
    //     if (pickBan.type === "BAN") {
    //         bannedHeroes.push(<img src={pickBan.heroIcon} className={pickBan.type} alt={''} />)
    //     }
    //     else if (pickBan.type === "RDNT") {
    //         radiantHeroes.push(<img src={pickBan.heroIcon} alt={''} />)
    //     } else {
    //         direHeroes.push(<img src={pickBan.heroIcon} alt={''} />)
    //     }
    // })

    let list = [];
    props.pickBanImgs.forEach(pickBan => {
        list.push(<div className={`pickBanDisplay ${pickBan.type}`}>
            <img src={pickBan.heroIcon} className={pickBan.type} alt={''} />
            <p className="pickBanText">{pickBan.type}</p>
        </div>)
    })
    // const pickBanTableLabels = props.pickBanImgs.map(pickBan => <td><p className={pickBan.type}>{pickBan.type}</p></td>)
    return (
        <div className="outer-shadow-container">
            <div className="pickBansContainer">{list}</div>
        </div>

        // <Table className="pickBanChart">
        //     <tbody style={{padding: "0px"}}>
        //         <tr>
        //             {pickBanTableImgs}
        //         </tr>
        //         <tr>
        //             <td></td>
        //         </tr>
        //         {/* <tr>
        //             {pickBanTableLabels}
        //         </tr> */}
        //     </tbody>
        // </Table>

        // <Table id="pickBanChart">
        //     <thead>
        //         <tr>
        //             <th></th>
        //             <th>Heroes</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <th id="radiant">Radiant</th>
        //             <td>{radiantHeroes}</td>
        //         </tr>
        //         <tr>
        //             <th id="dire">Dire</th>
        //             <td>{direHeroes}</td>
        //         </tr>
        //         <tr>
        //             <th id="bans">Bans</th>
        //             <td>{bannedHeroes}</td>
        //         </tr>
        //     </tbody>
        // </Table>

        //{/* <div>
    //     <div>{radiantHeroes}</div>
    //     <div>{direHeroes}</div>
    //     <div>{bannedHeroes}</div>
    //     </div> */}
    )
}

export default PickBanDisplay