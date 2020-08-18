import React, {Component} from 'react'
import HeroCard from './HeroCard'
import SearchHeader from './SearchHeader'
import MainNavbar from './MainNavbar'

class HeroList extends Component {
    constructor() {
        super()
        this.state = {
            heroes: [
                "tiny",
                "terrorblade",
                "morphling",
                "medusa",
                "ember spirit",
                "anti mage",
                "void spirit"
            ]
        }
        this.onChange = this.onChange.bind(this)
    }

    // this works for rendering all heroes via the search param
    onChange = (event) => {
        const heroes = ['tiny', 'terrorblade', 'medusa', 'ember spirit', 'morphling', 'anti mage', 'void spirit']
        const sample = heroes.filter(hero => hero.startsWith(event.target.value))
        this.setState({heroes: sample})

    }

    // renders all heroes in the state, 
    // create a searchHeader component that uses onChange method in this class
    // This might be a bad idea because heroes will not be re-added upon deleting search query 
    // without a page reload
    render() {
        const heroCards = this.state.heroes.map(hero => <HeroCard hero={hero} />)
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