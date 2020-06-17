import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import logo from './logo192.png'

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg myNav-bottom">
      <img className="ml-5" src={logo} alt="img-react"/>
      <p className="ml-5" style={{color: "#61dafb", letterSpacing: "1em"}}>
        &copy;&nbsp;2020&nbsp;&nbsp;michael cote
        &nbsp;&nbsp;&nbsp;made with React</p>
      <ScrollUpButton />
    </nav>
  );
}

export default Footer;