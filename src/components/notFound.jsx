import React from 'react';
import image from './404image.jpg';

const NotFound = () => {
  return (
    <img style={{height: "60vh", width: "68vw"}} src={image} alt="404"/>
  );
}

export default NotFound;