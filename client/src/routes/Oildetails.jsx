import React, { useContext } from "react";
import "../styles/scss/oil-details.scss";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";

const Oildetails = () => {
  const { oils, setOils } = useContext(OilsContext);
  const params = useParams();
  const oilMatch = oils.find((oil) => oil.id == params.id);


  React.useEffect(() => {
    const getData = async () => {

      try {
        const response = await FindOils.get("/");
        // const response = await FindOils.get("/");
        setOils(response.data.data.oils);
     

        // const data = JSON.parse(window.localStorage.getItem('oils'))
        // if (data) {
        //   console.log("DATA", data)
        // window.localStorage.setItem('oils', JSON.stringify(oils));
        // setOils(data)
        //
      }
      catch (error) {
        console.log("whats wrong", error);
      }
    }
    getData()
  } , [oils])

  // React.useEffect(() => {
  //   // console.log("response should be here", oils);
  //   localStorage.setItem('oils!',oilMatch);
  // });

  


  return oilMatch ? (
    <Layout>
      <div className="details-main">
        {/* <div id="detail-title">{oilMatch.name}</div> */}
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
