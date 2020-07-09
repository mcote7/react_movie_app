import React from 'react';

const Loading = () => {
  return (
    <h1><span style={{color: "red"}}>
      <i className="fa fa-spinner fa-pulse fa-5x" aria-hidden="true"></i></span>
      &nbsp;<span style={{fontSize: "small"}}>one moment please . . .</span></h1>
  );
}

export default Loading;