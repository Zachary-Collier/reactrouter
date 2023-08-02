import { Routes, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <div id="navbar">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/red">Red</Link>
      </li>
      <li>
        <Link to="/blue">Blue</Link>
      </li>
      <li>
        <Link to="/green">Green</Link>
      </li>
      <li>
        <Link to="/purple">Purple</Link>
      </li>
    </div>
  );
}
export default Navbar;
