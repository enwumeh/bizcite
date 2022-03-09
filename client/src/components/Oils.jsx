import React, { useEffect, useContext } from "react";
import { OilsContext } from "../context/OilsContext";
import "../styles/scss/oils.scss";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Oils = () => {
  const { oils, setOils } = useContext(OilsContext);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = JSON.parse(window.localStorage.getItem('oils'))
  //       if (data) {
  //         console.log("DATA", data)
  //         setOils(data)
  //      }
  //     } catch (error) {
  //       console.log("whats wrong", error);
  //     }
  //   };
  //   getData();
  // }, [setOils]);


  // React.useEffect(() => {
  //   window.localStorage.setItem('oils', JSON.stringify(oils));
  // },[oils]);

 
  return (
    <Layout>
      <div id="oils-main">
        {oils.map((oil) => {
          return (
            <div className="oils-list" key={oil.id}>
              <div>
                <Link to={`/oils/${oil.id}`}>
                  <img className="oil-pic" src={oil.url} alt="oils"></img>
                </Link>
                <div>{oil.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Oils;
