import React, { useEffect, useContext } from "react";
import styles from '../styles/scss/oil-details.scss';
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";



const Oildetails = () => {
  const { oils, setOils } = useContext(OilsContext);


  const params = useParams();
  const oilMatch = oils.find((oil) => oil.id == params.id);

  console.log("olz",oils)
  return (
    <Layout>
    <div className="details-main">
        oil details
         {oilMatch.name}
    </div>
    </Layout>
  )
}

export default Oildetails
