import React, { useEffect, useContext } from "react";
import styles from "../styles/scss/oil-details.scss";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";

const Oildetails = () => {
  const { oils, setOils } = useContext(OilsContext);

  const params = useParams();
  const oilMatch = oils.find((oil) => oil.id == params.id);
  // setOils(oilMatch);

  console.log("olz", oils);

  return oilMatch ? (
    <Layout>
      <div className="details-main">
        <div id="detail-title">{oilMatch.name}</div>
        <img id="detail-pic" src={oilMatch.url} alt="oil pic"></img>
        <div id="detail-blerb"> {oilMatch.description}</div>
      </div>
    </Layout>
  ) : (
    <div>srry no oil</div>
  );
};

export default Oildetails;
