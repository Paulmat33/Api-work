import React from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react-dom";
import logo from "../../assets/techeconomy.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div>
      
        <img src={logo} alt="" />
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Product</li>
          </ul>
        </nav>
        <p className="bar"><FaBars/></p>
      
          <nav className="mobile-view">
          {<ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Product</li>
          </ul>}
        </nav>
      
    </div>
  );
};

export default Navbar;
