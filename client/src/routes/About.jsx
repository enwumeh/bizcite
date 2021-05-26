import React from "react";
import styles from "../styles/scss/about.scss";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import photo from "../images/me-photo.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="about-div">
        <p className="about-p">
          It all started when I was gifted Pink Friday by Nicki Minaj Perfume
          and was OBSESSED. When it finished (shortly after), I looked for more
          and stumbled across an inexpensive body oil that claimed to smell just
          like Pink Friday. I was surprised to find out how similar it was, and
          how much longer it lasted. And I got compliments constantly! Since
          then I've sworn by oil fragrances, and want to spread the love
          <br />
          <br />
          All fragrances are hand filled, and made with tried and true, name
          brand fragrances in mind. Smell amazing all day for just a fraction of
          the price. Find your new signature scent!
          <br />
          <br />
          The fragrances are made up of essential oils, synthetic aromatic
          compounds, natural isolates and a carrier oil (DPG) to blend
          everything components together and make the fragrance wearable. The
          manufacturing process is regulated by the IFRA (International
          Fragrance Association) so all oils are hypoallergenic (more info on
          the IFRA
          <a
            target="blank" rel="noopener noreferrer"
            id="ifra-link"
            href="https://ifrafragrance.org/safe-use/introduction"
          >
            {" "}
            here
          </a>
          )<button id="seeall-button">See all fragrances!</button>
        </p>
        <div id="me-div">
          <img id="me-photo" src={photo} alt="me" />
          </div>
        <Link to="/oils"></Link>
      </div>
    </Layout>
  );
};

export default About;
