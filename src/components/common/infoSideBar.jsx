import React from 'react';
import {Link} from 'react-router-dom';

const InfoSideBar = ({ currentPage, onDeleteAll }) => {
  return (
    <div className="col-2 pt-3 info-side">
      <p className="m-0">Want to go back <Link to="xyz">?</Link></p>&rarr;
      <span onClick={() => onDeleteAll()}
      style={{fontSize: "xx-small"}}>WINDOW TEST HERE&nbsp;
      <span role="img" aria-label="img">&#128128;</span></span>
      <hr/>
      <Link to="/">go back here</Link>&nbsp;
      <span className="">( {currentPage} )</span>
      <hr/>
      <p>"Lorem <Link to="/"> ipsum </Link>encyclopaedia galactica of brilliant syntheses
        <Link to="/"> billions </Link> upon <Link to="/"> billions </Link>
        invent the universe prime number. Venture not a sunrise but a
        <Link to="/"> galaxyrise Cambrian explosion bits </Link>
        of moving fluff colonies stirred by starlight?
        <Link to="/" > Emerged into </Link> consciousness?"</p>
    </div>
  );
}

export default InfoSideBar;


