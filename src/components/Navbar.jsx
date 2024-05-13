import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useCursor } from "./CursorContext";
function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsToggled(false);
    }
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const { setHovering } = useCursor();

  return (
    <div
      className={`Navbar fixed-top ${visible ? "nav-visible" : "nav-hidden"}`}
    >
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
          href="https://medium.com/@benabrahambiju"
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
