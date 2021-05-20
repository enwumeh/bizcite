import React, { useState } from "react";
// import "./../index.css";
// import avi from "./../images/nav-pic.jpeg";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Nav = () => {
  



  return (
      <ul className="big-list">
        <li className="list">
          <Link
            className="Link"
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="list">
          <Link
            className="Link"
            to="/about"
          >
            About
          </Link>
        </li>

        <li className="list">
          <Link
            className="Link"
            to="/oils"
          >
            Shop
          </Link>
        </li>
      </ul>
  );
};

export default Nav;