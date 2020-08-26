import React from 'react'
import './styles/heroPageStyles.css'

function SearchHeader(props) {
    return (
        <form id="heroSearchBar">
            <input type="text" placeholder="Hero Name" onChange={props.onChange}/>
        </form>
    )
}

export default SearchHeader