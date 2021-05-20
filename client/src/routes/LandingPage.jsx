import React from "react";
import styles from "../styles/scss/landing-page.scss";
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";



const LandingPage = () => {
  return (
    <Layout>
    <div className="landing-main">
      <div className="landing-text">
        <p className="landing-title">Fragrances By Emmanuela</p>
        <h2 className="landing-subtitle">Find your Signature frangrance</h2>
        <Link to='/home'>
        <button className="landing-button">Shop now!</button>
        </Link>
      </div>
      </div>
      </Layout>
  );
};

export default LandingPage;
