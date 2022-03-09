import React from 'react'
import '../styles/scss/header.scss'
import { Link } from 'react-router-dom';
import Search from "./Search";
// import Sort from "./Sort";


//props from Layout
const Header = (props) => {
  return (

   
    <div className="header-main">
{console.log("in Header:",props)}
        <Link className="app-title" to='/'>
      <h1 className="header-title">
        Smell Luxurious for Less
      </h1>
      <h2 className="header-subtitle">
          Fragrances by Emma
      </h2>
      </Link>
      <Search search={props.search} />
     
    </div>
  )
}

export default Header
