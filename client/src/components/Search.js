
import React from 'react'
import '../styles/scss/search.scss'
//props from header (originally from App)
const Search = (props) => {

  const {value, search} = props
  return (
    
    <form className="search-form">
    <input
        className="search-input"
        value={value}
        // onChange={(e) => props.search(e)}
        onChange={(e) => search(e)}
        name="Search"
        placeholder="&nbsp;&nbsp;&nbsp;Search"
        type="text"
        autoFocus
/>
</form>
  )
}

export default Search
