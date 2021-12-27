import React, { useEffect, useContext } from "react";
import FindOils from "../APIs/FindOils";
import { OilsContext } from "../context/OilsContext";
import "../styles/scss/oils.scss";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Oils = () => {
  const { oils, setOils } = useContext(OilsContext);

 
// cookies/localandsessionstorage
  // localStorage.setItem('name', 'Bob')
  // localStorage.removeItem('name')
  // sessionStorage.setItem('name', 'John')
  // sessionStorage.setItem('name', 'Bob')
  // document.cookie = 'name=Kyle; expires=' + new Date(9999, 0, 1).toUTCString()
  // document.cookie = 'lastName=Smith; expires=' + new Date(9999, 0, 1).toUTCString()

  // const history = createBrowserHistory();

  React.useEffect(() => {
    const getData = async () => {
      try {
        // const response = await FindOils.get("/");
        const data = JSON.parse(window.localStorage.getItem('oils'))
        if (data) {
          window.localStorage.setItem('oils', JSON.stringify(oils));
          setOils({ oils: data })
          // console.log("DATA", data)
       }
        // localStorage.setItem("oils", response.data.data.oils
        // localStorage.setItem("oils", response.data.data.oils)
        // const localOils = localStorage.getItem("oils") || 0
        // window.location = '/';
      } catch (error) {
        console.log("whats wrong", error);
      }
    };
    getData();
  }, []);


  React.useEffect(() => {
    window.localStorage.setItem('oils', JSON.stringify(oils));
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
