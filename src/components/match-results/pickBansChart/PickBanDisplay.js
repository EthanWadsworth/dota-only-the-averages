import React from 'react'
import {Table} from 'react-bootstrap'

function PickBanDisplay(props) {

    const pickBanTableImgs = props.pickBanImgs.map(pickBan => <td><img src={pickBan.heroIcon} alt={''} /></td>)
    const pickBanTableLabels = props.pickBanImgs.map(pickBan => <td><p>{pickBan.type}</p></td>)
    return (
        <Table>
            <tbody>
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