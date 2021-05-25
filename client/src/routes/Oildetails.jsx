import React from 'react'
import styles from '../styles/scss/oil-details.scss';
import Layout from "../components/Layout";


const Oildetails = (props) => {
  return (
    <Layout>
    <div className="details-main">
        oil details
         {props.url}
    </div>
    </Layout>
  )
}

export default Oildetails
