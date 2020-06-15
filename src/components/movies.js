import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres, genres} from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utilitys/paginate';
import {sortTheMovies} from '../utilitys/movieSort';
import ListGroup from './common/listGroup';

class Movies extends Component {
  state = { 
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    this.setState({movies: getMovies(), genres: getGenres()});
    // console.log("all genres:", genres)
  }

  handleDelete = (movie, movLen, currentPage) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    if(movLen === 1) {
      this.setState({ movies, currentPage: currentPage -= 1});
    }
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

  handleNext = (page, pagesCount) => {
    if(page < pagesCount) {
      this.setState({currentPage: page += 1});
    }
    this.setState({currentPage: page});
  };

  handlePrev = (page) => {
    if(page > 1) {
      this.setState({currentPage: page -= 1});
    }
    this.setState({currentPage: page});
  };

  handleGenreSelect = genre => {
    console.log("Genre:", genre)
  };

  render() {
    const {length: count} = this.state.movies;
    const {pageSize, currentPage, movies: allMovies} = this.state;
    const newMoviesList = sortTheMovies(allMovies);

    if(count === 0) {
      return(
        <a className="badge badge-pill badge-light ml-5 mt-5 cote" href="/">
        we are currently&nbsp;&nbsp;&nbsp;<span role="img" aria-label="so" className="mike">
        &#x1f595; sold out &#x1f595;</span>&nbsp;&nbsp;&nbsp;go back&nbsp;&rarr;</a>
      );
    }

    const movies = paginate(newMoviesList, currentPage, pageSize);
    const movLen = movies.length;
    // console.log("paginated movies-", movies)
    // console.log("paginated movies-length", movLen)
    return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <div className="row mb-2">
            <div className="col-2">
              <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect}/>
            </div>
            <div className="col-8 p-0">
              <h1 className="mb-2">Welcome, hey there buddy</h1>
              <h5 className="">We have {newMoviesList.length} total movies in the database</h5>
              <p className="">Showing {movies.length} on page {currentPage}</p>
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
                  <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(m, movLen, currentPage)}>
                  <span role="img" aria-label="img">&#128128;</span></button>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
          <Pagination itemsCount={count} pageSize={pageSize}
          currentPage={currentPage} onPageChange={this.handlePageChange}
          onPagePrev={this.handlePrev} onPageNext={this.handleNext}/>
      </div>
    </div>
    );
  }
}
export default Movies;
