import React from 'react';
import {Link} from 'react-router-dom';
import icon from './favicon.ico';

const NavBar = () => {

  return (
    <nav className="navbar sticky-top navbar-expand-lg myNav-top">
      <img className="ml-2 navImg" src={icon} alt="img-react"/>
      <Link to="/" className="ml-2 navLinks-bold">REACTIVE CINEMA</Link>
      <Link to="/movies" className="ml-5 my-2 navLinks">Movies</Link>
      <Link to="/customers" className="ml-5 my-2 navLinks">Customers</Link>
      <Link to="/rentals" className="ml-5 my-2 navLinks">Rentals</Link>
    </nav>
  );
};

export default NavBar;
