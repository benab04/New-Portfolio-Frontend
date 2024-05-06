// CursorContext.js
import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const setHovering = (value) => {
    setIsHovering(value);
  };

  return (
    <CursorContext.Provider value={{ isHovering, setHovering }}>
      {children}
    </CursorContext.Provider>
  );
};
