import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./Nav.css";


const Nav = props => (
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand nameOfMe" style={{color: 'white'}} href="#">Timour</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    
    <span className="navbar-text">
      <a className="nav-link" href="#">About</a>
    </span>
    <span className="navbar-text">
      <a className="nav-link" href="#">Portfolio</a>
    </span>
    <span className="navbar-text">
      <a className="nav-link" href="#">Contact</a>
    </span>
  </div>
</nav>
</div>
);
export default Nav;