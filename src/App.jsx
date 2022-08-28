import { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
