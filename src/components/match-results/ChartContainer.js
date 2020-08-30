import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import ChartRow from './ChartRow'
import './teamChartStyles.css'

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
                localHeroName={this.props.heroIds.find(hero => hero.id === player.hero_id).localized_name}
                items={this.props.items}
            />
        })
        this.setState({heroTable})
    }

    // Each Table Row should be in the form of a tr with td in it
    // Hero K D A NetW LH DN GPM XPM DMG HEAL BLD WARDS ITEMS
    render() {
        return (
            <div className="teamTable">
                <Table className={this.props.teamChart} responsive>
                    <thead>
                        <tr>
                            <th id="heroCol">Hero</th>
                            <th className="cell-small">Lvl</th>
                            <th className="cell-small">K</th>
                            <th className="cell-small">D</th>
                            <th className="cell-small">A</th>
                            <th className="cell-minor">Net</th>
                            <th className="cell-minor">LH</th>
                            <th className="cell-minor">DN</th>
                            <th className="cell-minor">GPM</th>
                            <th className="cell-minor">XPM</th>
                            <th className="cell-minor">DMG</th>
                            <th className="cell-minor">HEAL</th>
                            <th className="cell-minor">BLD</th>
                            <th id="invCol">INV</th>
                            <th id="backpackCol">BPACK</th>
                            <th id="ntrlCol">NTRL</th>
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