import React, { useContext } from "react";
import "../styles/scss/home.scss";
// import FindOils from "../APIs/FindOils";
import { OilsContext } from "../context/OilsContext";
import { Link } from "react-router-dom";
import flowers from "../images/flowers.jpeg";
import Layout from "../components/Layout";
// import Blog from "../components/Blog";


const Home = () => {
  const { oils } = useContext(OilsContext);

  const popOils = oils.filter(
    (oil) =>
      oil.name === "Good Girl" ||
      oil.name === "Jimmy Choo" ||
      oil.name === "Baccarat Rouge"
  );

  return oils ? (
    <>
      {/* <Blog/> */}
    <Layout>
      <div className="image-div">
      <Link to="/oils">
        <button id="seeall-button">See all fragrances!</button>
        </Link>
        {/* <div className="flower-div"> */}
        <img id="flowers-photo" src={flowers} alt="flowers" />
        {/* <img id="flowers-photo" src={flowers} alt="flowers" /> */}
        {/* <img id="flowers-photo" src={flowers} alt="flowers" /> */}
        {/* </div> */}
       
      </div>
      <div className="home-title">Best Sellers</div>
      <div id="pop-main">
        {popOils.map((oil) => {
          return (
            <div className="pop-list" key={oil.id}>
              <div id="oil-div">
                <Link to={`/oils/${oil.id}`}>
                  <img className="oil-pic" src={oil.url} alt="pics"></img>
                </Link>
                <div>{oil.name}</div>
              </div>
              
            </div>
          );
        })}
      </div>
     
      </Layout>
      
   </>
   
  ) : (
    <div>dd</div>
  );
};

export default Home;
