import React, {Component} from 'react'
import axios from 'axios'
import PickBanDisplay from './PickBanDisplay'

class PickBanChartContainer extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            pickBansList: null,
            pickBanImgs: null
        }
    }
    
    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // need to go through the pickBansList and apply styles to each one accordingly
    // I could split into radiant and dire lists, regardless of picks or bans, go off team id
    // the only thing is, only the radiant have bans in ranked matches bc 3 heroes are voted to be banned globally
    // use a simple row, applying classes conditionally to each img tag: rad, dire pick, ban
    // would like to preserve order as well
    // can I sort in order?
    async componentDidMount() {
        let pickBanImgs = [];
        // sorting objects based on pick order
        const sortedPickBansList = this.props.pickBansList.sort((a, b) => (a.order > b.order) ? 1 : -1)
        await this.asyncForEach(sortedPickBansList, async (pickBan) => {
            let heroName = this.props.heroData.find(hero => hero.id === pickBan.hero_id)
            if (heroName) {
                heroName = heroName.name
                const heroIcon = await axios.get(`http://localhost:5000/heroIcons/${heroName}/0`)
                // hero ban
                if (!pickBan.is_pick) {
                    pickBanImgs.push({heroIcon: heroIcon.data, type: "BAN"})
                }
                // radiant team pick
                else if (!pickBan.team) {
                    pickBanImgs.push({heroIcon: heroIcon.data, type: "RDNT"})
                } else {
                    pickBanImgs.push({heroIcon: heroIcon.data, type: "DIRE"})
                }
            }
        })
        this.setState({pickBanImgs, pickBansList: sortedPickBansList, isLoading: false})
    }

    render() {
        return !this.state.isLoading ? <PickBanDisplay  pickBansList={this.state.pickBansList} pickBanImgs={this.state.pickBanImgs}/> : null
    }
}

export default PickBanChartContainer