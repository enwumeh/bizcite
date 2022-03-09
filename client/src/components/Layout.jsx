import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import '../styles/scss/layout.scss'
import NavBar from "./NavBar";
import SearchResults from "./SearchResults.jsx"

//props from APp
const Layout = (props) => {
 
// why are the layout props an array of children?
  return (
    <div className="layout-main">
      {console.log("in Layout",props)}
      <Header search={props.search} onChange={props.onChange} />
      <NavBar />
      {/* props.children is rendering everything that layout wraps around*/}
        {props.children} 
      
      {/* <SearchResults/> */}
      <Footer/>
    </div>
  )
}

export default Layout
