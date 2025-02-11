import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <a className="navbar-brand" href="#">Culinary Chronicles</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link">Recipes</a></li>
        <li className="nav-item"><a className="nav-link">About Us</a></li>
        <li className="nav-item"><a className="nav-link">Contact Us</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
