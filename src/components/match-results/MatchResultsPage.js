import React, { Component } from 'react'
import axios from 'axios'

class MatchResultsPage extends Component {
    constructor() {
        super()
        this.state = {items: []}
    }

    // gets all items from Steam api and stores them in state
    // will need to add call to match id as well to get all 10 player info to be placed into components
    // Change when production server is up and running
    componentDidMount() {
        axios.get('http://localhost:5000/items')
        .then(response => {
            this.setState({items: response.data.result.items})
        })

        // need to fix the match endpoint to perform error handling when the match id is not found
        // send back status 404 ideally - this can be handled on client side
        axios.get(`http://localhost:5000/match/${this.props.match.params.id}`)
        .then(response => console.log(response))
    }

    render() {
        return (
            <div>
                <h1>Match Results Page</h1>
            </div>
        )
    }
}

export default MatchResultsPage