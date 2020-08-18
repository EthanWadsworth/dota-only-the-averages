import React from 'react'

function SearchHeader(props) {
    return (
        <form>
            <input type="text" placeholder="Hero Name" onChange={props.onChange}/>
        </form>
    )
}

export default SearchHeader