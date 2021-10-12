import React from 'react'
import '../styles/scss/header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header-main">
        <Link className="app-title" to='/'>

      <h1 className="header-title">
        Smell Luxurious for Less
      </h1>
      <h2 className="header-subtitle">
          Fragrances by Emma
      </h2>
      </Link>
    </div>
  )
}

export default Header
