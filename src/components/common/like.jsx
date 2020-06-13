import React from 'react';

const Like = ({liked, onLike}) => {
  let classes = "fa fa-2x fa-heart"
  if(!liked) classes += "-o"
  return(
    <i onClick={onLike} className={classes} style={{cursor: "pointer"}} aria-hidden="true"></i>
  );
};
export default Like;

