import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utilitys/paginate';
import {sortTheMovies} from '../utilitys/movieSort';

class Movies extends Component {
  state = { 
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleDeleteAll = () => {
    this.setState({movies: ""});
  };

  handleLike = movie => {
    console.log("like clicked", movie)
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
  };

  handlePageChange = page => {
    console.log("page#",page)
    this.setState({currentPage: page});
  };

  render() {
    const {length: count} = this.state.movies;
    const {pageSize, currentPage, movies: allMovies} = this.state;
    const newMoviesList = sortTheMovies(allMovies);
    if(count === 0) {
      return(
        <a className="badge badge-pill badge-light ml-3 mt-2 cote" href="/">
        we are currently <span className="mike">sold out</span> ,
        &nbsp;&nbsp;&nbsp;&nbsp;go back&nbsp;&rarr;</a>
      );
    }
    const movies = paginate(newMoviesList, currentPage, pageSize);
    return (
    <div className="col">
      <div className="row ml-1 mb-2">
        <div className="col-11 p-0">
          <h5 className="">We have {newMoviesList.length} total movies in the database</h5>
          <p className="">Showing {movies.length} on page {currentPage}</p>
        </div>
        <div className="col-1">
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Like</th>
            <th>
              <button className="btn btn-danger btn-sm" style={{display: "grid"}}
              onClick={() => this.handleDeleteAll()}>
              <span role="img" aria-label="img">&#128128;</span>*</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {count > 0 && movies.map((m) =>
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
      <Pagination itemsCount={count} pageSize={pageSize}
      currentPage={currentPage} onPageChange={this.handlePageChange}/>
    </div>
    );
  }
}
export default Movies;
