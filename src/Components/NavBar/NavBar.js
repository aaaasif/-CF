import React from 'react';
import "./NavBar.css"
import logo from "./../../assets/football-website-image/logo.png"

const NavBar = () => {
    return (
      <nav>
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
        <img src={logo} alt="" />
        <span className="text">#CF</span>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#agency">Agency</a>
        </li>
        <li>
          <a href="#player">Player</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </nav>
    );
};

export default NavBar;