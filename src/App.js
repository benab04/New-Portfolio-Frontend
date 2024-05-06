import React from "react";
import "./styles/App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Projects />
    </div>
  );
}

export default App;
