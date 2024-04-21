import React from "react";
import "../styles/Hero.css";
import dp from "../assets/images/Ben Abraham Biju.png";
function Hero() {
  return (
    <div className="Hero">
      <div>
        <h5 className="welcome-tag">Hey There!</h5>
        <h1 className="name">
          I'm <span>Ben Abraham Biju</span>
        </h1>
        <h5 className="profiles">
          Web<div className="dot-separator"></div>Data/ML
          <div className="dot-separator"></div>Robotics
        </h5>
        <div className="social-handles">
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div>
        <img src={dp} className="dp"></img>
      </div>
    </div>
  );
}

export default Hero;
