import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsToggled(false);
    }
  }, []);
  return (
    <div className="Navbar">
      <div className="personal-brand">
        <h2>
          <a href="/">BEN</a>
        </h2>
      </div>
      <div className={`navbar-links${isToggled ? " mobile-menu " : ""}`}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div
        className={`toggle-nav ${isToggled ? " close " : ""}`}
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="mobile-menu"></div>
    </div>
  );
}

export default Navbar;
