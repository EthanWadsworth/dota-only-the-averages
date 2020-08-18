import React from 'react'
import '../styles/herocard.css'

function HeroCard(props) {
    return (
        <div className="col col-lg-2">
            <div className="card HeroCard">
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title">{props.hero}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

// want this to look like hero icon w/ hero name underneath
// cards should be in rows in alphabetical order, with some space between them 
// I need to wrap the entire component in a row class container

export default HeroCard