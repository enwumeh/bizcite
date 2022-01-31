import React, { useContext, useState } from "react";
import "../styles/scss/oil-details.scss";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";
import FindOils from "../APIs/FindOils";

const Oildetails = () => {
  const { oils, setOils } = useContext(OilsContext);
  let params = useParams();
  // const [oil, setOil] = useState([])

  // retrieve the oil that mathces the id in the params 
  const oilMatch = oils.find((oil) => oil.id == params.id);

  React.useEffect(() => {
    // const getData = async () => {
    // try {
    //   const response =  FindOils.get(`/${params.id}`);
    //   let oilFrmParam = response.data.data.oil[0]
    //   console.log("oilFrmParamL",oilFrmParam)
    //   // const response = await FindOils.get("/");
    //   setOil(oilFrmParam);
    //   console.log("oil:", oil)
       

    //   // const data = JSON.parse(window.localStorage.getItem('oils'))
    //   // if (data) {
    //     // window.localStorage.setItem('oils', JSON.stringify(oils));
    //     // setOils(data)
    //     //
    // }
    // catch (error) {
    //   console.log("whats wrong", error);
    // }
    // window.location = '/';
    // } 
    // getData()
  }, [],
//  }, [setOils,oilMatch],
  );

  // return (
  //   <div>{oils.name}</div>
  // )

  
return oilMatch ? (
  // return  (


  <Layout>
    {console.log("oil:", oilMatch)}

    <div>{oilMatch.name}</div>
     <div className="details-main"> 
      <div key={oilMatch.id} id="detail-title">{oilMatch.name}</div>
      <img id="detail-pic" src={oilMatch.url} alt="oil pic"></img>
      <div id="detail-blerb"> {oilMatch.description}</div> 


     </div> 
    </Layout>
  
) :
  <div>
    loading
  </div>
  
  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       // const response = await FindOils.get("/");
  //       const data = JSON.parse(window.localStorage.getItem('oilsUPDATED'))
  //       if (data) {
  //         console.log("data!", data)
  //         // window.localStorage.setItem('oils', JSON.stringify(oils));
  //         setOils(data)
  //         //
  //      }
  //       // window.location = '/';
  //     } catch (error) {
  //       console.log("whats wrong", error);
  //     }
  //   };
  //   getData();
  // }, []);
};

export default Oildetails;
