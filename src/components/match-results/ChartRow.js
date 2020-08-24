import React, {Component} from 'react'
import axios from 'axios'

// might change to just handling the chart in a single component and the dropdown in another single component
class ChartRow extends Component {
    constructor() {
        super()
        this.state = {
            heroIcon: null,
            inventoryIcons: null,
            backpackIcons: null,
            neutralItemIcon: null,
            isLoading: true
        }
        this.getItemUrls = this.getItemUrls.bind(this)
    }
    // {hero_id, kills, deaths, assists, last_hits, denies, gold_per_min, xp_per_min, level} = props.player
    // Hero K D A NetW LH DN GPM XPM DMG HEAL BLD WARDS ITEMS

    // grabs all player items and converts them from ids to the correct item labels
    getItemNames() {
        const inventoryItemNames = [];
        ['item_0', 'item_1', 'item_2', 'item_3', 'item_4', 'item_5'].forEach(term => {
            if (this.props.player[term] === 0) {
                return 
            }
           inventoryItemNames.push(this.props.items.find(item => item.id === this.props.player[term]))
        })
        const bpackItemNames = [];
        ['backpack_0', 'backpack_1', 'backpack_2'].forEach(term => {
            if (this.props.player[term] === 0) {
                return 
            }
            bpackItemNames.push(this.props.items.find(item => item.id === this.props.player[term]))
        })
        const neutralItemName = [this.props.items.find(item => item.id === this.props.player.item_neutral)]
        return {inventoryItemNames, bpackItemNames, neutralItemName}
    }

    // custom async forEach to handle many api calls 
    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // Gets item icon urls and stores them in correct state array 
    async getItemUrls(arr, prop) {
        const itemLinks = [];
        await this.asyncForEach(arr, async (item) => {
            if (!item) {
                return
            } else {
                const response = await axios.get(`http://localhost:5000/itemIcons/${item.name}`)
                itemLinks.push(<img key={item.id} src={response.data} alt={''} style={{width: "20px", height:"20px", float:"left", display: "inline"}}></img>)
            }
        })
        this.setState({[prop]: itemLinks})
    }

    // Imports and calls endpoints for required hero and item data
    componentDidMount() {
        axios.get(`http://localhost:5000/heroIcons/${this.props.heroName}/0`)
        .then(response => this.setState({heroIcon: response.data}))

        const itemNames = this.getItemNames()
        this.getItemUrls(itemNames.inventoryItemNames, 'inventoryIcons')
        this.getItemUrls(itemNames.bpackItemNames, 'backpackIcons')
        this.getItemUrls(itemNames.neutralItemName, 'neutralItemIcon')

        this.setState({isLoading: false})
    }

    // for formatting chart text - finish setting precision
    formatText(val, restrictDecimals) {
        if (val === 0) {
            return '-'
        } else if (restrictDecimals) {
            if (val >= 1000) {
                return val.toFixed(1) + 'k'
            } else {
                return val.toFixed(1)
            }
        }
        return val
    }

    render() {
        if (this.state.isLoading) {
            return null
        }
        // add ternary operations later 
        return (
            <tr>
                <td><img src={this.state.heroIcon} alt={this.props.heroName}></img></td>
                <td>{this.formatText(this.props.player.level)}</td>
                <td>{this.formatText(this.props.player.kills)}</td>
                <td>{this.formatText(this.props.player.deaths)}</td>
                <td>{this.formatText(this.props.player.assists)}</td>
                <td>{this.formatText(this.props.player.gold + this.props.player.gold_spent, true)}</td>
                <td>{this.formatText(this.props.player.last_hits)}</td>
                <td>{this.formatText(this.props.player.denies)}</td>
                <td>{this.formatText(this.props.player.gold_per_min)}</td>
                <td>{this.formatText(this.props.player.xp_per_min)}</td>
                <td>{this.formatText(this.props.player.hero_damage, true)}</td>
                <td>{this.formatText(this.props.player.hero_healing, true)}</td>
                <td>{this.formatText(this.props.player.tower_damage, true)}</td>
                <td><span style={{width: "120px"}}>{this.state.inventoryIcons}</span></td>
                <td>{this.state.backpackIcons}</td>
                <td>{this.state.neutralItemIcon}</td>
            </tr>
        )
    }
}

export default ChartRow