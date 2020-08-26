import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import '../../styles/herocard.css'

class HeroCard extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {clicked: !prevState.clicked}
        })
    }

    render() {
        if (this.state.clicked) {
            return <Redirect to={{
                    pathname: `/recentMatches/${this.props.hero.localized_name}`, 
                }} 
             />
        }

        return (
            // <div className="col col-lg-2">
            //     <div className="card HeroCard" onClick={this.handleClick}>
            //         {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
            //         <div className="card-body">
            //             <h5 className="card-title">{this.props.hero.localized_name}</h5>
            //             {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            //             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            //         </div>
            //     </div>
            //     {/* <div>{this.state.seen ? <StatsCard toggle={this.onToggle} hero={this.props.hero} items={this.props.items}/> : null}</div> */}
            // </div>
            <OverlayTrigger
            overlay={
              <Tooltip id={'tooltip-top'}>
                <strong>{this.props.hero.localized_name}</strong>
              </Tooltip>
            }
          >
            {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
            <img src={this.props.heroUrl} alt={''} onClick={this.handleClick} className="heroCard"/>
          </OverlayTrigger>
            /* <img src={this.props.heroUrl} alt={''} onClick={this.handleClick} className="heroCard"/> */
        )
    }
}

// want this to look like hero icon w/ hero name underneath
// cards should be in rows in alphabetical order, with some space between them 
// I need to wrap the entire component in a row class container

export default HeroCard