import React, { useState, useEffect } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
      <div
        className="circle"
        style={{ left: cursorPosition.x - 11, top: cursorPosition.y - 11 }}
      ></div>
    </div>
  );
};

export default CustomCursor;
