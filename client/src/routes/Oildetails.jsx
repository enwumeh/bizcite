import React, { useContext } from "react";
import "../styles/scss/oil-details.scss";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";

const Oildetails = () => {
  const { oils, setOils } = useContext(OilsContext);

  const params = useParams();
  // console.log("oils11111:", oils)
  const oilMatch = oils.find((oil) => oil.id == params.id);
  // console.log("oil???", oilMatch);


  React.useEffect(() => {
    let oilz = localStorage.getItem('oils');
    // console.log("response should be here", oilz);
    // setOils(oilz)
  })

  React.useEffect(() => {
    // console.log("response should be here", oils);
    localStorage.setItem('oils', JSON.stringify(oilMatch));
  });



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
