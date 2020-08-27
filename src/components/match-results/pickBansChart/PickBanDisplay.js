import React from 'react'
import {Table} from 'react-bootstrap'
import './styles/pickBanChartStyles.css'

function PickBanDisplay(props) {

    // add classnames to img and td tags
    const pickBanTableImgs = props.pickBanImgs.map(pickBan => <td><img className={pickBan.type} src={pickBan.heroIcon} alt={''} /></td>)
    const pickBanTableLabels = props.pickBanImgs.map(pickBan => <td><p className={pickBan.type}>{pickBan.type}</p></td>)
    return (
        <Table>
            <tbody style={{padding: "0px"}}>
                <tr>
                    {pickBanTableImgs}
                </tr>
                <tr>
                    {pickBanTableLabels}
                </tr>
            </tbody>
        </Table>
    )
}

export default PickBanDisplay