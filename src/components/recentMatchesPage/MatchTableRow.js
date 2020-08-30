import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class MatchTableRow extends Component {
    constructor() {
        super()
        this.state = {
            radiantIcons: null,
            direIcons: null
        }
    }

    // calculates and returns match duration
    calcMatchDuration(secs) {
        return Math.floor(secs/60) + ":" + String(secs % 60).padStart(2, '0')
    }

    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    }

    // gets all hero icons 
    async componentDidMount() {
        let heroIcons = [];
        let counter = 0;
        await this.asyncForEach(this.props.heroNames, async (hero) => {
            const response = await axios.get(`http://localhost:5000/heroIcons/${hero}/0`)
            heroIcons.push(<img key={counter++} src={response.data} alt={''}></img>)
        })
        this.setState({
            radiantIcons: heroIcons.slice(0, heroIcons.length/2), 
            direIcons: heroIcons.slice(heroIcons.length/2, heroIcons.length)
        })

    }

    render() {
        return (
            <tr>
                <td><Link to={`/match/${this.props.match.match_id}`}>{this.props.match.match_id}</Link></td>
                <td>{this.calcMatchDuration(this.props.match.duration)}</td>
                <td className={this.props.match.radiant_win ? "radiant-color" : "dire-color"}>
                    {this.props.match.radiant_win ? "Radiant Victory" : "Dire Victory"}
                </td>
                <td>
                    <span className="radiant-color">{this.props.match.radiant_score}</span>
                    <span> / </span>
                    <span className="dire-color">{this.props.match.dire_score}</span>
                    {/* {this.props.match.radiant_score + " / " + this.props.match.dire_score} */}
                </td>
                <td>{this.state.radiantIcons}</td>
                <td>{this.state.direIcons}</td>
            </tr>
        )
    }
}

export default MatchTableRow