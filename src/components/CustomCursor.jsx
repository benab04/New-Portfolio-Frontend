// CustomCursor.js
import React, { useState, useEffect } from "react";
import { useCursor } from "./CursorContext";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const { isHovering } = useCursor();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const CircleColor = isHovering ? "rgba(54, 12, 205, 0.311)" : "transparent";
  const innerCircleDisplay = isHovering ? "none" : "block";
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <div className="arrow"></div>
      <div
        className="inner-circle"
        style={{
          width: 1,
          height: 1,
          left: cursorPosition.x,
          top: cursorPosition.y,
          display: innerCircleDisplay,
        }}
      ></div>
      <div
        className="circle"
        style={{
          width: isHovering ? "40px" : "25px",
          height: isHovering ? "40px" : "25px",

          left: isHovering ? cursorPosition.x - 15 : cursorPosition.x - 11,
          top: isHovering ? cursorPosition.y - 15 : cursorPosition.y - 11,

          backgroundColor: CircleColor,
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
