// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
