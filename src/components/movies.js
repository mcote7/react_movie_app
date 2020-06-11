import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService'

class Movies extends Component {
  state = { 
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    return (
    <div className="col">
      <p>Showing {this.state.movies.length} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.sort((a, b) => (a.title > b.title) ? 1 : -1).map((mov) =>
          <tr key={mov._id}>
            <td>{mov.title}</td>
            <td>{mov.genre.name}</td>
            <td>{mov.numberInStock}</td>
            <td>{mov.dailyRentalRate}</td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(mov)}>
              <span role="img" aria-label="img">&#128128;</span></button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Movies;
