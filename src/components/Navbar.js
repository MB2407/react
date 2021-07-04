import React from 'react';
import img from '../img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return(
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">

    <a className="navbar-brand" href="#"><img className="logo" src={img} alt=""/></a>
    <span><h3 className="wru">Mann Bajpai</h3></span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#bf00ff"}}/>
    </button>
    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav ms-auto">
        <li className="nav-item active">
         <Nav.Item><Nav.Link className="nav-link" activeClassName="active" href="/">Home <span className="sr-only">(current)</span></Nav.Link></Nav.Item>
        </li>
        <li className="nav-item">
        <Nav.Item> <Nav.Link className="nav-link" activeClassName="active" href="/intro">About me</Nav.Link></Nav.Item>
        </li>
        <li className="nav-item">
        <Nav.Item> <Nav.Link className="nav-link" activeClassName="active" href="/portfolio">Portfolio</Nav.Link></Nav.Item>
        </li>
        <li className="nav-item">
        <Nav.Item><Nav.Link className="nav-link" activeClassName="active" href="/contact">Contact me</Nav.Link></Nav.Item>
        </li>
        
      </ul>
    
    </div>
    </div>
  </nav>
   )
}
export default Navbar;