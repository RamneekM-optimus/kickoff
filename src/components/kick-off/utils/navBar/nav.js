import React from 'react';
import './nav.css';
import {NavLink, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {BrowserRouter,withRouter} from 'react-router-dom';





const nav=()=>(

<div className="topnav" id="myTopnav">

  <NavLink to="/project" >Projects</NavLink>
  <NavLink to="/customer">Customers</NavLink>
  <NavLink to="/salescontact">Sales Contact</NavLink>
  <NavLink to="/deliverycontact">Delivery Contact</NavLink>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
 
  
</div>
)

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  
}

export default nav;
