import React from "react";
import "./styles/App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
