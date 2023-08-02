// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";
import Home from "./components/Home.jsx";
import Green from "./components/Green.jsx"
import Purple from "./components/Purple.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"



function App() {
  // const [count, setCount] = useState(0);

  return (
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
        <Link to="/Green">Green</Link>
        <Link to="/Purple">Purple</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/Green" element={<Green />} />
          <Route path="/Purple" element={<Purple />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
