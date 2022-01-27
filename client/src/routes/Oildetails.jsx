import React, { useContext, useState } from "react";
import "../styles/scss/oil-details.scss";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { OilsContext } from "../context/OilsContext";
import FindOils from "../APIs/FindOils";

const Oildetails = () => {
  // const { oils, setOils } = useContext(OilsContext);
  let params = useParams();
const [oil, setOil] = useState([])

// retrieve the oil that mathces the id in the params 
  // const oilMatch = oils.find((oil) => oil.id == params.id);

  React.useEffect(() => { 
    // const getData = async () => {
      try {
        const response =  FindOils.get(`/${params.id}`);
        let oilFrmParam = response.data.data.oil[0]
        console.log("oilFrmParamL",oilFrmParam)
        // const response = await FindOils.get("/");
        setOil(oilFrmParam);
        console.log("oil:", oil)
       

        // const data = JSON.parse(window.localStorage.getItem('oils'))
        // if (data) {
          // window.localStorage.setItem('oils', JSON.stringify(oils));
          // setOils(data)
          //
      }
      catch (error) {
        console.log("whats wrong", error);
      }
        // window.location = '/';
      // } 
      // getDat a()
    }, [setOil,params.id ],
  );




  
  // return (
  //   <div>{oils.name}</div>
  // )

  
return  (
  // return  (


  <Layout>
    {/* <div>{oils.name}</div> */}
     <div className="details-main"> 
      <div key={oil.id} id="detail-title">{oil.name}</div>
      <img id="detail-pic" src={oil.url} alt="oil pic"></img>
      <div id="detail-blerb"> {oil.description}</div> 


     </div> 
    </Layout>
  
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
