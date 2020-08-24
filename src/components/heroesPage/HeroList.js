import React, {Component} from 'react'
import HeroCard from './HeroCard'
import SearchHeader from './SearchHeader'
import axios from 'axios'
import MainNavbar from '../MainNavbar'

class HeroList extends Component {
    constructor() {
        super()
        this.state = {heroes: [], items: null}
        this.onChange = this.onChange.bind(this)
        this.heroes = []
    }

    // grabs all current heroes and items from the steam api from backend endpoint
    // FIX later when actual backend in production plz
    componentDidMount() {
        axios.get('http://localhost:5000/heroData')
            .then(response => {
                this.heroes = response.data.result.heroes
                this.setState({heroes: this.heroes})
            })

        axios.get('http://localhost:5000/items')
        .then(response => this.setState({items:response.data.result.items}))
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
        const heroCards = this.state.heroes.map(hero => <HeroCard key={hero.id} hero={hero} items={this.state.items}/>)
        return (
            <div>
                <MainNavbar />
                <SearchHeader onChange={this.onChange} />
                <div className="container">
                    <div className="row">
                        {heroCards}
                    </div>
                </div>
            </div> 
        )
    }
}

export default HeroList