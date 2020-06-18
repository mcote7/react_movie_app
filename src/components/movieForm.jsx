import React from 'react';

const MovieForm = ({match, history}) => {
  return (
    <React.Fragment>
      <h1>Movie Form&nbsp;{match.params.id}</h1>
      <button onClick={() => history.push('/movies')} className="btn btn-primary">Save</button>
    </React.Fragment>
  );
}

export default MovieForm;