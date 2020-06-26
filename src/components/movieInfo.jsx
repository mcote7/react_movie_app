import React from 'react';

const MovieInfo = () => {
  return (
    <React.Fragment>
      <div className="col-1"></div>
      <div className="col-5 info-register">
        <p className="mt-5">Movies&nbsp;
        <span><i className="fa fa-video-camera ml-1" aria-hidden="true"></i></span></p>
        <hr/>
          <p className="mt-2">Your movies database</p>
        <hr/>
        <div className="col mt-5">
          <ul className="mt-5"
          style={{textAlign: "left"}}>
            <li>Create new movies</li>
            <li>Edit existing movies</li>
          </ul>
        </div>
      </div>
    <div className="col-1"></div>
  </React.Fragment>
  );
}

export default MovieInfo;