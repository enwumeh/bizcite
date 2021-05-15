import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import '../styles/scss/layout.scss'



const Layout = (props) => {
  return (
    <div className="layout-main">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
