import React from 'react';
import {NavLink} from 'react-router-dom';
import icon from './favicon.ico';

const NavBar = () => {
  const class1 = "ml-5 my-2 navLinks";
  const class2 =  class1 + "-on";

  return (
    <nav className="navbar sticky-top navbar-expand-lg myNav-top">
      <img className="ml-2 navImg" src={icon} alt="img-react"/>
      <NavLink exact to="/" className="ml-2 navLinks-bold">REACTIVE CINEMA</NavLink>
      <NavLink exact to="/movies"  activeClassName={class2} className={class1}>Movies</NavLink>
      <NavLink exact to="/customers"  activeClassName={class2} className={class1}>Customers</NavLink>
      <NavLink exact to="/rentals"  activeClassName={class2} className={class1}>Rentals</NavLink>
      <NavLink exact to="/login" activeClassName={class2} className={class1}>Login
      <span><i className="fa fa-user-circle user-icon ml-1" aria-hidden="true"></i></span></NavLink>
      
    </nav>
  );
};

export default NavBar;
