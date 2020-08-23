import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import ChartRow from './ChartRow'

class ChartContainer extends Component {
    constructor() {
        super()
        this.state = {
            heroTable: null,
            isLoading: true
        }
    }
    // handle the logic for both the radiant and dire tables 
    // const heroTable = props.players.map(player => {
    //     console.log(props.heroIds)
    //     return <ChartRow 
    //         key={player.player_slot} 
    //         player={player} 
    //         // heroName={props.heroIds[Number(player.hero_id) - 1].name}
    //     />
    // })

    componentDidMount() {
        const heroTable = this.props.players.map(player => {
            // console.log(this.props.heroIds.find(hero => hero.id === player.hero_id).name)
            return <ChartRow 
                key={player.player_slot} 
                player={player} 
                heroName={this.props.heroIds.find(hero => hero.id === player.hero_id).name}
                items={this.props.items}
            />
        })
        this.setState({heroTable})
    }

    // Each Table Row should be in the form of a tr with td in it
    // Hero K D A NetW LH DN GPM XPM DMG HEAL BLD WARDS ITEMS
    render() {
        return (
            <div>
                <Table style={{tableLayout: "auto"}} responsive="sm">
                    <thead>
                        <tr>
                            <th>Hero</th>
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
                            <th style={{width: "120px"}}>INV</th>
                            <th>BPACK</th>
                            <th>NTRL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.heroTable}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ChartContainer