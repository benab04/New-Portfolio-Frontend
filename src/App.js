import React from "react";
import "./styles/App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
