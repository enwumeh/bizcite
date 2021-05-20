import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import '../styles/scss/layout.scss'
import NavBar from "./NavBar"



const Layout = (props) => {
  return (
    <div className="layout-main">
      <Header />
      <NavBar/>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
