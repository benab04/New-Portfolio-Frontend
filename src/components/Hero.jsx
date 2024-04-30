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
          <a
            href="https://www.instagram.com/ben_abraham_biju/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100087392554247"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ben-abraham-biju-2038a4244/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/benab04" target="_blank" rel="noreferrer">
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
