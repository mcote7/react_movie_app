import React from 'react';
import {Link} from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import Clock from '../common/clock';
import logo from './logo192.png'

const Footer = () => {
  return (
    <nav className="myNav-bottom">
      <div className="footer">
        <div className="footrow m-0 p-0">

          <div className="col-3 center">
            <h4 className="grey">ADD LINKS</h4>
            <hr/>
            <p className="footLinks">add link</p>
            <p className="footLinks">add link</p>
            <p className="footLinks">add link</p>
            <p className="footLinks">add link</p>
            <p className="footLinks">add link</p>
            <p className="footLinks">add link</p>
          </div>

          <div className="col-3 center">
            <h4 className="grey">MORE LINKS</h4>
            <hr/>
            <Clock/>
            <p className="footLinks">more link</p>
            <p className="footLinks">more link</p>
            <p className="footLinks">more link</p>
            <p className="footLinks">more link</p>
          </div>

          <div className="col-3 center">
          </div>

          <div className="col-3 center">
              <div className="row">
                <span><i className="fa fa-pied-piper-alt fa-3x reactBlue" aria-hidden="true"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;powered by pied piper.</span>
              </div>
                <div className="row my-5">
                  <Link to="/" className="navLinks">
                  &copy;&nbsp;2020 Michael Cote</Link>
                  &nbsp;<span className="tinyWords">made with</span>&nbsp;<span>React.</span> 
                </div>
              <div className="row mt-5">
                <img className="App-logo" src={logo} alt="img-react"/>
              </div>
          </div>

        </div>
      </div>
      <ScrollUpButton/>
    </nav>
  );
}

export default Footer;
