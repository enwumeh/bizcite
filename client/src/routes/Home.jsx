import React from 'react'
import ByCompany from "../components/ByCompany"
import Carousel from "../components/Carousel"
import Oils from "../components/Oils"


const Home = () => {
  return (
    <div className="home-main">
      Home page
      <Carousel/>
      <ByCompany />
      <Oils/>
    </div>
  )
}

export default Home
