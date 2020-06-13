import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';

class Movies extends Component {
  state = { 
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleDeleteAll = () => {
    this.setState({movies: ""});
  };

  handleLike = (movie) => {
    console.log("like clicked", movie)
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
  };

  render() {
    const { length: count} = this.state.movies;
    if(count === 0) {
      return(
        <div className="col">
          <div className="row ml-1">
            <a className="badge badge-pill badge-light ml-3 mt-2 cote" href="/">
            we are currently <span className="mike">sold out</span> ,
            &nbsp;&nbsp;&nbsp;&nbsp;go back&nbsp;&rarr;</a>
          </div>
        </div>
      );
    }
    return (
    <div className="col">
      <div className="row ml-1">
        <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteAll()}>
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
            <th>Like</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {count > 0 && this.state.movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
          .map((m) =>
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onLike={() => this.handleLike(m)}/>
            </td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(m)}>
              <span role="img" aria-label="img">&#128128;</span></button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
      <Pagination/>
    </div>
    );
  }
}
export default Movies;
