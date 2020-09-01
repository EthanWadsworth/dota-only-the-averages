import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import ChartContainer from './ChartContainer'
// import InvalidMatchIdPage from '../matchNotFoundPage/InvalidMatchIdPage'
import PickBanChartContainer from './pickBansChart/PickBanChartContainer'
import MainNavbar from '../MainNavbar'
import MatchResultsHeader from './MatchResultsHeader'
import MinimapContainer from './minimap/MinimapContainer'
import './matchResults.css'

class MatchResultsPage extends Component {
    constructor() {
        super()
        this.state = {
            heroIds: null, 
            items: null, 
            radiantPlayers: null, 
            direPlayers: null, 
            matchData: null, // contains information such as first blood time and score, as well as the winner of the game
            isLoading: true,
            isInvalidMatch: false
        }
    }

    // gets all items from Steam api and stores them in state
    // will need to add call to match id as well to get all 10 player info to be placed into components
    // Change when production server is up and running
    async componentDidMount() {
        // need to fix the match endpoint to perform error handling when the match id is not found
        // send back status 404 ideally - this can be handled on client side
        // Current issue: Memory leak from asnyc call when match id is invalid on items request
        const response = await axios.get(`http://localhost:5000/match/${this.props.match.params.id}`)
        // .then(response => {
            if (response.data.error) {
                // return <Redirect to='/' />
                // console.log('Error found')
                this.setState({isInvalidMatch: true})
            } else {
                const numPlayersOnTeam = response.data.result.players.length/2
                // console.log(typeof response.data.result.players.length)
                this.setState({
                    radiantPlayers: response.data.result.players.slice(0, numPlayersOnTeam),
                    direPlayers: response.data.result.players.slice(numPlayersOnTeam),
                    matchData: response.data.result
                })

                const itemData = await axios.get('http://localhost:5000/items')
                this.setState({items: itemData.data.result.items})

                const heroData = await axios.get('http://localhost:5000/heroData')
                const heroes = heroData.data.result.heroes
                this.setState({heroIds: heroes})
            }
            this.setState({isLoading: false})
        // })
        // .catch(e => this.setState({invalidMatch: true}))

        // axios.get('http://localhost:5000/items')
        // .then(response => {
        //     this.setState({items: response.data.result.items})
        // })
    }

    /** MAJOR ISSUE! There might be some insane recursion going on to the API in the component update 
     * 
     * Adjustment: need to remove the update and handle everything in mount
    */

    // If the match is valid, then grab item and hero data from the Steam API
    // componentDidUpdate(prevProps, prevState) {
    //     if(!prevState.invalidMatch) {
    //         axios.get('http://localhost:5000/items')
    //         .then(response => {
    //             this.setState({items: response.data.result.items})
    //         })

    //         axios.get('http://localhost:5000/heroData')
    //         .then(response => {
    //             const heroes = response.data.result.heroes
    //             this.setState({heroes})
    //         })
    //     }
    // }

    // componentWillUnmount() {
    //     this.setState({isLoading: true, isInvalidMatch: false})
    // }

    componentDidUpdate() {
        console.log('component updated')
    }

    render() {
        if (!this.state.heroIds || !this.state.items || !this.state.radiantPlayers || !this.state.direPlayers || !this.state.matchData) {
            return <div>
                <MainNavbar />
                <h1>Loading...</h1>
            </div>
        }
        else if (this.state.isInvalidMatch) {
            return <Redirect to={'/'} />
            // return <InvalidMatchIdPage />
        } else {
            return (
                <div>
                    <MainNavbar />
                    <Container className="large-container">
                    <MatchResultsHeader 
                        duration={this.state.matchData.duration}
                        radiantScore={this.state.matchData.radiant_score}
                        direScore={this.state.matchData.dire_score}
                        radiantWin={this.state.matchData.radiant_win}
                    />
                    <h1 className="radiant-color text-shadow">Radiant</h1>
                    <ChartContainer 
                        players={this.state.radiantPlayers} 
                        items={this.state.items}
                        heroIds={this.state.heroIds}
                        teamChart={'RadiantChart'}
                    />
                    <h1 className="dire-color text-shadow">Dire</h1>
                    <ChartContainer 
                        players={this.state.direPlayers} 
                        items={this.state.items}
                        heroIds={this.state.heroIds}
                        teamChart={'DireChart'}
                    />
                    <div>
                        <div className="minimap-pickBan-container">
                            <h1 className="text-shadow">Pick Ban Order</h1>
                            <PickBanChartContainer heroData={this.state.heroIds} pickBansList={this.state.matchData.picks_bans}/>
                        </div>
                        <div className="building-status">
                            <h1 className="text-shadow">Building Status</h1>
                            <MinimapContainer 
                                tower_status_radiant={this.state.matchData.tower_status_radiant}
                                tower_status_dire={this.state.matchData.tower_status_dire}
                                barracks_status_radiant={this.state.matchData.barracks_status_radiant}
                                barracks_status_dire={this.state.matchData.barracks_status_dire}
                                winningTeam={this.state.matchData.radiant_win}
                            />
                        </div>
                    </div>
                    </Container>
                </div>
            )
        } 
    }
}

export default MatchResultsPage