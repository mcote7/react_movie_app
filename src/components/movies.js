import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService'

class Movies extends Component {
  state = { 
    movies: getMovies()
  };

    handleDelete = movie => {
      const removeMov = this.state.movies.filter(mov=> mov._id !== mov._id)
      this.setState(removeMov);
  };

  
  render() {
    
    return (
    <div className="col">
      <p>Showing {this.state.movies.length} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title:</th>
            <th>Genre:</th>
            <th>Stock:</th>
            <th>Rate:</th>
            <th>&#128128;</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((mov, index) =>
          <tr key={index}>
              <td>{mov.title}</td>
              <td>{mov.genre.name}</td>
              <td>{mov.numberInStock}</td>
              <td>{mov.dailyRentalRate}</td>
              <td><button className="btn btn-danger btn-sm" onClick={()=> this.handleDelete(mov._id)}>delete</button></td>
          </tr>
            )}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Movies;