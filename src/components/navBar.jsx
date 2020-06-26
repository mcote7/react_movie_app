import React from 'react';
import {NavLink} from 'react-router-dom';
import icon from './favicon.ico';

const NavBar = ({user}) => {
  const class1 = "ml-5 my-2 navLinks";
  const class2 =  class1 + "-on";
  //R=rightSide
  const class1R = "ml-auto mr-0 my-2 navLinks";
  const class2R =  class1 + "-on";
  return (
    <nav className="navbar sticky-top navbar-expand-md myNav-top">

      <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
      <img className="ml-2 navImg" src={icon} alt="img-react"/></a>
      <NavLink exact to="/" className="ml-2 navLinks-bold">REACTIVE CINEMA
      <span><i className="fa fa-video-camera ml-1" aria-hidden="true"></i></span></NavLink>

      <NavLink exact to="/movies"  activeClassName={class2} className={class1}>Movies
      <span><i className="fa fa-film ml-1" aria-hidden="true"></i></span></NavLink>
      <NavLink exact to="/customers"  activeClassName={class2} className={class1}>Customers
      <span><i className="fa fa-address-card ml-1" aria-hidden="true"></i></span></NavLink>
      <NavLink exact to="/rentals"  activeClassName={class2} className={class1}>Rentals
      <span><i className="fa fa-ticket ml-1" aria-hidden="true"></i></span></NavLink>

      
      {!user &&
      <React.Fragment>
        <NavLink exact to="/login" activeClassName={class2R} className={class1R}>Login
        <span><i className="fa fa-user-circle ml-1" aria-hidden="true"></i></span></NavLink>
        <NavLink exact to="/register" activeClassName={class2} className={class1}>Register
        <span><i className="fa fa-user-o ml-1" aria-hidden="true"></i></span></NavLink>
      </React.Fragment>
      }
      {user &&
      <React.Fragment>
        <NavLink exact to="/profile" activeClassName={class2R} className={class1R}>
          Welcome back, {user.name}
        <span><i className="fa fa-user-circle ml-1" aria-hidden="true"></i></span></NavLink>
        <NavLink exact to="/logout" activeClassName={class2} className={class1}>Logout
        <span><i className="fa fa-user-circle-o ml-1" aria-hidden="true"></i></span></NavLink>
      </React.Fragment>
      }

      <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/">
      <i className="fa fa-imdb fa-2x reactBlue ml-5 mr-2" aria-hidden="true"></i></a>

    </nav>
  );
};
export default NavBar;
