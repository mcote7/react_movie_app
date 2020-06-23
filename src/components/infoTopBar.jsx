import React from 'react';

const InfoTopBar = ({ count, filteredLen, movLen, pageSize, currentPage }) => {
  return (
    <React.Fragment>
    <h1 className="mb-2"><span role="img"aria-label="mov">&#127916;</span>Welcome to the Movies</h1>
      <h5 className="">We have {count} total movies in the database</h5>
      <br/>
      {filteredLen === 0 ? <p className="p-1 noMovies">&emsp;no movies here . . .</p> : ''}
        {filteredLen > 0 ? <p className="len-data">Showing&nbsp; {movLen > 1
        ? <span>{movLen} &nbsp;movie's</span>
        :<span>{movLen} movie</span> }&nbsp;
        {(filteredLen / pageSize -1) > 0 ? <span>on page&nbsp; {currentPage} 
        &nbsp;&nbsp;of&nbsp; {(Math.ceil(filteredLen / pageSize))} .</span> : ""}</p> : ""}
    </React.Fragment>
  );
}

export default InfoTopBar;