import React from 'react';
import {Link} from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import logo from './logo192.png'

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg myNav-bottom">
      <img className="ml-5" src={logo} alt="img-react"/>
      <Link to="/" className="ml-5 navLinks" style={{color: "#61dafb", letterSpacing: "1em"}}>
        &copy;&nbsp;2020&nbsp;&nbsp;michael cote
        &nbsp;&nbsp;&nbsp;made with React</Link>
      <ScrollUpButton />
    </nav>
  );
}

export default Footer;