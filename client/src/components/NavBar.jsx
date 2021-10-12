import React from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/scss/nav-bar.scss";

const Nav = () => {
  return (
    <div className="nav-div">
      <ul className="big-list">
        <li className="list">
          <Link className="Link" to="/home">
            Home
          </Link>
        </li>
        <li className="list">
          <Link className="Link" to="/about">
            About
          </Link>
        </li>

        <li className="list">
          <Link className="Link" to="/oils">
            Shop
          </Link>
          </li>
        </ul>
    </div>
  );
};

export default Nav;
