import React from 'react'
import styles from '../styles/scss/home.scss'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-main">
      <Link to="/oils">
        <button>See all fragrances</button>
        </Link>
      Home page
    </div>
  )
}

export default Home
