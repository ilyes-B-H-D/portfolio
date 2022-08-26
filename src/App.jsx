import { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
