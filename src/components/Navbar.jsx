import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useCursor } from "./CursorContext";
function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsToggled(false);
    }
  }, []);
  const { setHovering } = useCursor();

  return (
    <div className="Navbar">
      <div className="personal-brand">
        <h2>
          <a
            href="/"
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            BEN
          </a>
        </h2>
      </div>
      <div className={`navbar-links${isToggled ? " mobile-menu " : ""}`}>
        <a
          href="#home"
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          Home
        </a>
        <a
          href="#projects"
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          Projects
        </a>
        <a
          href="#"
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          Blog
        </a>
        <a
          href="#"
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          Contact
        </a>
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
