import React, { useEffect, useContext } from "react";
import styles from '../styles/scss/home.scss'
import { OilsContext } from "../context/OilsContext";
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";


const Home = () => {
  const { oils, setOils } = useContext(OilsContext);
setOils(oils)
  return (
    <Layout>
    <div className="home-main">
       
      </div>
      <Link to="/oils">

      <button id="home-button">See all fragrances</button>
        </Link>
      </Layout>
  )
}

export default Home
