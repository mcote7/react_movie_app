import React from 'react';

const RegisterInfo = () => {
  return (
    <React.Fragment>
      <div className="col-1"></div>
    <div className="col-5 info-register">
      <p className="mt-5">REGISTER&nbsp;&nbsp;with&nbsp;
      REACTIVE CINEMA<span><i className="fa fa-video-camera ml-1" aria-hidden="true"></i></span></p>
      <hr/>
      <p className="mt-2">" Enjoy all the benifits of becoming a member "&nbsp;&nbsp;-
      &nbsp;<span style={{fontSize: "small"}}>cote</span></p>
      <hr/>
      <div className="col">
        <ul style={{textAlign: "left"}}>
          <li>New releases !</li>
          <li>All access !</li>
          <li>Low monthly subscription !</li>
        </ul>
      </div>
    </div>
      <div className="col-1"></div>
    </React.Fragment>
  );
}

export default RegisterInfo;