import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="personal-brand">
        <h2>
          <a href="/">BEN</a>
        </h2>
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
