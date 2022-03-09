import React from 'react'

const Sort = (props) => {
  return (
    
    <form className="sort-container">
      {/* <select className="sort" onChange={handleChange}> */}
      <select className="sort">
        <option className="filters" label="&nbsp;&nbsp;&nbsp;&nbsp;Filters:">Filters:</option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
      </select>
    </form>
  )
}

export default Sort