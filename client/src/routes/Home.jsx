import React, { useEffect, useContext } from "react";
import styles from "../styles/scss/home.scss";
import FindOils from "../APIs/FindOils";
import { OilsContext } from "../context/OilsContext";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  const { oils, setOils } = useContext(OilsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await FindOils.get("/");
        setOils(response.data.data.oils);
        console.log("response should be here", oils);
      } catch (error) {
        console.log("whats wrong", error);
      }
    };
    getData();
  }, []);

  const popOils = oils.filter(
    (oil) =>
      oil.name === "Good Girl" ||
      oil.name == "Jimmy Choo" ||
      oil.name == "Baccarat Rouge"
  );

  return oils ? (
    <Layout>
      <div id="pop-main">
        {popOils.map((oil) => {
          return (
            <div className="pop-list" key={oil.id}>
              <div>
                <Link to={`/oils/${oil.id}`}>
                  <img className="oil-pic" src={oil.url}></img>
                </Link>
                <div>{oil.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/oils">

        <button id="seeall-button">See all fragrances!</button>
        </Link>
    </Layout>
  ) : (
    <div>dd</div>
  );
};

export default Home;
