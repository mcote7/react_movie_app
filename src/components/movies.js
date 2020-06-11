import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService'

class Movies extends Component {
  state = { 
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  deleteAll = () => {
    this.setState({movies: ""});
  }

  render() {

    const { length: count} = this.state.movies;

    if(count === 0) {
      return(
        <div className="col">
          <div className="row ml-1">
            <a className="badge badge-primary d-inline-flex align-items-center mt-2" href="/">
            we are currently sold out ,&nbsp;&nbsp;&nbsp;&nbsp;go back&nbsp;&rarr;</a>
          </div>
        </div>
      );
    }
    return (
    <div className="col">
      <div className="row ml-1">
        <button className="btn btn-danger btn-sm" onClick={() => this.deleteAll()}>
        <span role="img" aria-label="img">&#128128;</span>all</button>
        <p className="ml-4">Showing {this.state.movies.length} movies in the database</p>
      </div>
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
          {count > 0 && this.state.movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
          .map((mov) =>
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
