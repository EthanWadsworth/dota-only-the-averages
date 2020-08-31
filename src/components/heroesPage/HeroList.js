import React, {Component} from 'react'
import HeroCard from './HeroCard'
import SearchHeader from './SearchHeader'
import axios from 'axios'
import MainNavbar from '../MainNavbar'
import './styles/heroPageStyles.css'

class HeroList extends Component {
    constructor() {
        super()
        this.state = {heroes: [], items: null, isLoading: true}
        this.onChange = this.onChange.bind(this)
        this.heroes = []
    }

    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // grabs all current heroes and items from the steam api from backend endpoint
    // FIX later when actual backend in production plz
    async componentDidMount() {
        const heroesList = await axios.get('http://localhost:5000/heroData')
            // .then(response => {
            //     this.heroes = response.data.result.heroes
            //     this.setState({heroes: this.heroes})
            // })
        this.heroes = heroesList.data.result.heroes
        this.setState({heroes: this.heroes, isLoading: false})
        
        // const heroImgsList = []
        // // await this.asyncForEach(heroesList.data.result.heroes, async (hero) => {
        // //     heroImgsList
        // // })
        // heroesList.data.result.heroes.forEach(hero => {
        //     const name = hero.name.replace(/npc_dota_hero_/gi, '') + '_';
        //     heroImgsList.push(<img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${name}sb.png`} alt={''}/>)
        // })
        // this.setState({heroes: heroImgsList})
        

        // I dont believe I'm using this for anything
        // axios.get('http://localhost:5000/items')
        // .then(response => this.setState({items:response.data.result.items}))
    }

    // this works for rendering all heroes via the search param
    onChange = (event) => {
        const sample = this.heroes.filter(hero => hero.localized_name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        this.setState({heroes: sample})

    }

    // renders all heroes in the state, 
    // create a searchHeader component that uses onChange method in this class
    // This might be a bad idea because heroes will not be re-added upon deleting search query 
    // without a page reload
    render() {
        if (this.state.isLoading) {
            return null
        } else {
        // const heroCards = this.state.heroes.map(hero => <HeroCard key={hero.id} hero={hero} items={this.state.items}/>)
            const heroCards = this.state.heroes.map(hero => {
                const name = hero.name.replace(/npc_dota_hero_/gi, '') + '_';
                // return <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${name}sb.png`} alt={''}/>
                return <HeroCard hero={hero} heroUrl={`http://cdn.dota2.com/apps/dota2/images/heroes/${name}sb.png`} />
            })
            return (
                <div>
                    <MainNavbar />
                    <div id="heroes-outer-shadow">
                        <div id="heroes-inside-border">
                            <div className="container heroImgsContainer">
                                <div id="heroSearchContainer">
                                    <h3>Choose a Hero</h3>
                                    <SearchHeader onChange={this.onChange} />
                                    <hr></hr>
                                </div>
                                <div className="innerHeroContainer">
                                    {heroCards}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            )
        }
    }
}

export default HeroList