import React, { useContext } from "react";
import "../styles/scss/oil-details.scss";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";
// import FindOils from "../APIs/FindOils";

const Oildetails = () => {
  const { oils } = useContext(OilsContext);
  const params = useParams();

  const oilMatch = oils.find((oil) => oil.id == params.id);

  
return oilMatch ? (
  // return  (


  <Layout>
    {/* <div>{oils.name}</div> */}
     <div className="details-main"> 
      <div id="detail-title">{oilMatch.name}</div>
      <img id="detail-pic" src={oilMatch.url} alt="oil pic"></img>
      <div id="detail-blerb"> {oilMatch.description}</div> 

     </div> 
    </Layout>
  
) : ( 
  
  <Layout>
  
   {/* <div className="details-main"> 
    <div id="detail-title">{oilMatch.name}</div>
    <img id="detail-pic" src={oilMatch.url} alt="oil pic"></img>
    <div id="detail-blerb"> {oilMatch.description}</div> 
   </div>  */}
   </Layout>
  // <div>srry no oil</div>
)
  
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
  // React.useEffect(() => {
  //   const getDeetsData = async () => {

  //     try {
  //       localStorage.clear()

  //       // const response = await FindOils.get("/");
  //       // // const response = await FindOils.get("/");
  //       // setOils(response.data.data.oils);
  //       // console.log("DATXllXXXA", oils)
     

  //       // const data = JSON.parse(window.localStorage.getItem('oils'))
  //       // if (data) {
  //         // console.log("DATA", data)
  //       window.localStorage.setItem('oilsUPDATED', JSON.stringify(oils));
  //       // setOils(data)
  //     }
  //     // }
  //     catch (error) {
  //       console.log("whats wrong", error);
  //     }
  //   }
  //   getDeetsData()
  // },[])
 
  // React.useEffect(() => {
  //   // return  console.log("DATXllXXXA", oils)
  //   // funct()
  //   console.log("DATXllXXXA", oilMatch)
  //   // console.log("response should be here", oils);
  //   // anythine a variable inside the depend, array changes, the usezeffect code gets triggered
  // },[]);



  
};

export default Oildetails;
