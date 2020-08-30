import React, { Component } from 'react'
import axios from 'axios'
import HeroAveragesDisplay from './HeroAveragesDisplay'


// purpose of this container - all business logic:
// calculate all averages for all required parts of the card
// get large hero img from dota cdn
// hash common items and team members - pass that image data down to the actual renderer
class HeroAveragesContainer extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            teammateImgs: null,
            itemImgs: null
        }
    }

    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // calculates win percent from 25 recent matches
    calcWinPercentage() {
        let wins = 0
        this.props.matches.forEach(match => {
            for (let i in match.players) {
                if (match.players[i].hero_id === this.props.heroId) {
                    if (match.players[i].player_slot < 120 && match.radiant_win) {
                        wins++
                    } else if (match.players[i].player_slot >= 128 && !match.radiant_win) {
                        wins++
                    }
                    break
                }
            }
        })
        return wins/this.props.matches.length
    }

    // calculating average net worth
    calcAvgNetWorth() {
        let sum = 0;
        this.props.matches.forEach(match => {
            for (let i in match.players) {
                if (match.players[i].hero_id === this.props.heroId) {
                    sum += match.players[i].gold + match.players[i].gold_spent
                }
            }
        })
        return sum/this.props.matches.length
    }

    // calculating avg using a match attribute
    calcAvgFromAttr(attr) {
        let sum = 0
        this.props.matches.forEach(match => {
            for (let i in match.players) {
                if (match.players[i].hero_id === this.props.heroId) {
                    sum += match.players[i][attr]
                }
            }
        })
        return sum/this.props.matches.length // fix display later
    }

    calcCommonTeammates() {
        let hashTable = {}
        this.props.matches.forEach(match => {
            match.players.forEach(player => {
                if (hashTable.hasOwnProperty(player.hero_id)) {
                    hashTable[player.hero_id] = hashTable[player.hero_id] + 1
                } else {
                    hashTable[player.hero_id] = 1
                }
            })
        })
        // sort in descending order and return the top 4
        let teamSorted = Object.keys(hashTable).sort(function(a,b){return hashTable[b]-hashTable[a]})
        teamSorted = teamSorted.slice(1, 6)
        teamSorted = teamSorted.map(heroId => {
            return this.props.heroData.find(hero => heroId === String(hero.id)).name
        })
        // return teamSorted.length <= 4 ? teamSorted : teamSorted.slice(0, 5)
        return teamSorted
    }

    // edit this: calculated for all items rn, need to look for the correct hero id first in each match
    // could maybe use array find here
    calcCommonItems() {
        let hashTable = {}
        const itemsList = ['item_0', 'item_1', 'item_2', 'item_3', 'item_4', 'item_5', 
                    'backpack_0', 'backpack_1', 'backpack_2', 'item_neutral'];

        // loop through each match, and find the player in each match with the desired hero, then get the items
        this.props.matches.forEach(match => {
            for (let i in match.players) { // player is an index 
                // console.log(player)
                if (match.players[i].hero_id === this.props.heroId) {
                    itemsList.forEach(item => {
                        if (match.players[i][item] === 0) {
                            return 
                        }
                        else if (hashTable.hasOwnProperty(match.players[i][item])) {
                            hashTable[match.players[i][item]] = hashTable[match.players[i][item]] + 1
                        } else {
                            // hashTable[player[item]] = 1
                            hashTable[match.players[i][item]] = 1
                        }
                    })
                    break
                }
            }
        })
        // sorts and return 6 most common items on the 
        let itemsSorted = Object.keys(hashTable).sort(function(a,b){return hashTable[b]-hashTable[a]})
        itemsSorted = itemsSorted.slice(0, 6)
        itemsSorted = itemsSorted.map(itemId => {
            return this.props.itemData.find(item => itemId === String(item.id)).name
        })
        return itemsSorted
    }

    // call above functions to get data into form to get item and hero urls 
    async componentDidMount() {
        const commonTeammates = this.calcCommonTeammates()
        const commonItems = this.calcCommonItems()
        let teammateImgs = [];
        let itemImgs = [];
        let currPageHeroIcon = await axios.get(`http://localhost:5000/heroIcons/${this.props.heroNpcName}/2`)
        // currPageHeroIcon = <img src={currPageHeroIcon.data} alt={''} /> // returns an img tag, switched bc using boots card
        currPageHeroIcon = currPageHeroIcon.data
        await this.asyncForEach(commonTeammates, async (hero) => {
            const response = await axios.get(`http://localhost:5000/heroIcons/${hero}/0`) // getting hero icon
            teammateImgs.push(<img src={response.data} alt={''}/>)
        })

        await this.asyncForEach(commonItems, async (item) => {
            const response = await axios.get(`http://localhost:5000/itemIcons/${item}`) // getting item icon
            itemImgs.push(<img src={response.data} alt={''}/>)
        })
        this.setState({teammateImgs, itemImgs, currPageHeroIcon, isLoading: false})
    }

    render() {
        return !this.state.isLoading ? 
        <HeroAveragesDisplay
            winAvg={this.calcWinPercentage()}
            killAvg={this.calcAvgFromAttr('kills')}
            deathAvg={this.calcAvgFromAttr('deaths')}
            assistAvg={this.calcAvgFromAttr('assists')}
            netWorthAvg={this.calcAvgNetWorth()} 
            heroDmgAvg={this.calcAvgFromAttr('hero_damage')}
            bldDmgAvg={this.calcAvgFromAttr('tower_damage')}
            heroHealAvg={this.calcAvgFromAttr('hero_healing')}
            lastHitAvg={this.calcAvgFromAttr('last_hits')}
            deniesAvg={this.calcAvgFromAttr('denies')}
            gpmAvg={this.calcAvgFromAttr('gold_per_min')}
            xpmAvg={this.calcAvgFromAttr('xp_per_min')}
            heroForPageImg={this.state.currPageHeroIcon}
            heroForPageName={this.props.heroName}
            teammateImgs={this.state.teammateImgs}
            itemImgs={this.state.itemImgs}
        /> 
        : 
        null
    }
}

export default HeroAveragesContainer