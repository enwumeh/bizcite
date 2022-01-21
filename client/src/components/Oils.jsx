import React, { useEffect, useContext } from "react";
import FindOils from "../APIs/FindOils";
import { OilsContext } from "../context/OilsContext";
import "../styles/scss/oils.scss";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Oils = () => {
  const { oils, setOils } = useContext(OilsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        // const response = await FindOils.get("/");
        const data = JSON.parse(window.localStorage.getItem('oils'))
        if (data) {
          console.log("DATA", data)
          // window.localStorage.setItem('oils', JSON.stringify(oils));
          setOils(data)
          //
       }
        // window.location = '/';
      } catch (error) {
        console.log("whats wrong", error);
      }
    };
    getData();
  }, []);


  React.useEffect(() => {
    window.localStorage.setItem('oils', JSON.stringify(oils));
    // window.localStorage.setItem('oils', 333)

  },[oils]);

 

  // React.useEffect(() => {
  //   window.localStorage.setItem('oils', oils);
  // }, [oils]);

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
