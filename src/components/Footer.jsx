import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/purple">Purple</Link>
        <Link to="/">Home</Link>
      </div>
    </footer>
  );
}

export default Footer;
