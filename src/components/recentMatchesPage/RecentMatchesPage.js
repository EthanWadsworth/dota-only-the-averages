import React, {Component} from 'react'
import axios from 'axios'
import MatchesTableContainer from './MatchesTableContainer'
import HeroAveragesContainer from './HeroAveragesContainer'
import {Container} from 'react-bootstrap'

class RecentMatchesPage extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            heroData: null,
            itemData: null,
            matches: null,
            heroId: null
        }
    }
    
    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // only load in all of the matches here, load in the rest of the match results individually
    // error handling to add: handle invalid heroId - send user to 404 page
    async componentDidMount() {
        const heroData = await axios.get('http://localhost:5000/heroData') // hero list
        const itemData = await axios.get('http://localhost:5000/items') // items list
        const heroForPage = heroData.data.result.heroes.find(hero => hero.localized_name.toLowerCase() === this.props.match.params.heroName.toLowerCase())
        const heroId = heroForPage.id
        const heroNpcName = heroForPage.name
        const matches = await axios.get(`http://localhost:5000/getMatchesWithHero/${heroId}`) // 25
        this.setState({
            matches: matches.data.matches, 
            heroData: heroData.data.result.heroes, 
            itemData: itemData.data.result.items,
            isLoading: false,
            heroId,
            heroNpcName
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Is Loading</div>
        }
        return (
            <div>
            <Container>
                25 Matches with {this.props.match.params.heroName}
                <HeroAveragesContainer 
                    matches={this.state.matches} 
                    heroData={this.state.heroData} 
                    heroId={this.state.heroId}
                    itemData={this.state.itemData}
                    heroNpcName={this.state.heroNpcName}
                    heroName={this.props.match.params.heroName}
                />
                <MatchesTableContainer matches={this.state.matches} heroData={this.state.heroData} />
            </Container>
            </div>
        )
    }
}

export default RecentMatchesPage