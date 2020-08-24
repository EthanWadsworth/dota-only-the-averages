import React, {Component} from 'react'
import axios from 'axios'
import MatchesTableContainer from './MatchesTableContainer'

class RecentMatchesPage extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            heroData: null,
            matches: null
        }
    }
    
    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // only load in all of the matches here, load in the rest of the match results individually
    async componentDidMount() {
        const matches = await axios.get(`http://localhost:5000/getMatchesWithHero/${this.props.location.state.heroId}`) // 25
        const heroData = await axios.get('http://localhost:5000/heroData') // hero list
        this.setState({matches: matches.data.matches, heroData: heroData.data.result.heroes, isLoading: false})
    }

    render() {
        if (this.state.isLoading) {
            return <div>Is Loading</div>
        }
        return (
            <div>
            25 Matches with {this.props.location.state.heroName}
            <MatchesTableContainer matches={this.state.matches} heroData={this.state.heroData}/>
            </div>
        )
    }
}

export default RecentMatchesPage