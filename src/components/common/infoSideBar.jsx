import React from 'react';
import {Link} from 'react-router-dom';

const InfoSideBar = ({ currentPage, onDeleteAll }) => {
  return (
    <div className="col-2 pt-3 info-side">
      <p className="m-0">Want to go back <Link to="xyz">?</Link></p>
      <span onClick={() => onDeleteAll()}
      style={{fontSize: "xx-small"}}>( delete all )</span>
      <hr/>
      <Link to="/">go back here</Link>&nbsp;
      <span className="">( {currentPage} )</span>
      <hr/>
      <p>"Cosmic<Link to="/"> ocean </Link>encyclopaedia galactica of brilliant syntheses
        <Link to="/"> billions </Link> upon <Link to="/"> billions </Link>
        invent the universe prime number. Venture not a sunrise but a
        <Link to="/"> galaxyrise Cambrian explosion bits </Link>
        of moving fluff colonies stirred by starlight?
        <Link to="/" > Emerged into </Link> consciousness?"</p>
    </div>
  );
}

export default InfoSideBar;


