import React from "react";
import styles from "../styles/scss/about.scss";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

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
          Fragrance Association) so the fragrances are hypoallergenic (more info
          on the IFRA 
          <a
            id="ifra-link"
            href="https://ifrafragrance.org/safe-use/introduction"
          >
            {" "}here
          </a>
        </p>

        <Link to="/oils">
          <button className="home-button">See all fragrances</button>
        </Link>
      </div>
    </Layout>
  );
};

export default About;
