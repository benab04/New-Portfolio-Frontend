import React from "react";
import "../styles/Hero.css";
import dp from "../assets/images/Ben Abraham Biju.png";
import { motion } from "framer-motion";
import { useCursor } from "./CursorContext";

function Hero() {
  const { setHovering } = useCursor();
  return (
    <div id="home" className="Hero">
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
          <motion.a
            href="https://www.instagram.com/ben_abraham_biju/"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{ cursor: "none" }}
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            <i class="fa-brands fa-instagram"></i>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100087392554247"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{ cursor: "none" }}
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            <i class="fa-brands fa-facebook"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ben-abraham-biju-2038a4244/"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ cursor: "none" }}
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            href="https://github.com/benab04"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            style={{ cursor: "none" }}
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            <i class="fa-brands fa-github"></i>
          </motion.a>
        </div>
      </div>
      <div>
        <img src={dp} className="dp"></img>
      </div>
    </div>
  );
}

export default Hero;
