import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres, genres} from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utilitys/paginate';
import {sortTheMovies} from '../utilitys/movieSort';
import ListGroup from './common/listGroup';
import InfoSideBar from './common/infoSideBar';
import SoldOut from './common/soldOut'

class Movies extends Component {
  state = { 
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "1"},...getGenres()];
    this.setState({movies: getMovies(), genres});
    // console.log("all genres:", genres)
  }

  handleDelete = (movie, movLen, currentPage) => {
    const allGenres = this.state.genres.filter(g => g.name === "All Genres");
    // console.log("all-genres", allGenres)
    // console.log("current-page", currentPage)
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    if(movLen === 1 && currentPage > 1) {
      this.setState({ movies, currentPage: currentPage -= 1});
    }
    else if(movLen === 1 && currentPage === 1) {
      this.setState({ movies, selectedGenre: allGenres});
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
    this.setState({selectedGenre: genre, currentPage: 1})
    console.log("Genre:", genre)
  };

  render() {
    const {length: count} = this.state.movies;
    if(count === 0) {
      return(
        <SoldOut/>
      );
    }

    const {pageSize, currentPage, selectedGenre, movies: allMovies} = this.state;

    const newMoviesList = sortTheMovies(allMovies);
    const filtered = selectedGenre && selectedGenre._id
    ? newMoviesList.filter(m => m.genre._id === selectedGenre._id)
    : newMoviesList;
    const movies = paginate(filtered, currentPage, pageSize);
    const movLen = movies.length;
    const filteredLen = filtered.length;
    // console.log("paginated movies-", movies)
    // console.log("paginated movies-length", movLen)
    return (
    <div>
      <div className="row mt-3">
        <div className="col-10">
          <div className="row mb-2">
            <div className="col-3">
              <ListGroup items={this.state.genres} 
              onItemSelect={this.handleGenreSelect} selectedItem={this.state.selectedGenre}/>
            </div>
            <div className="col-7 p-0">
              <h1 className="mb-2">Welcome, hey there buddy</h1>
                <h5 className="">We have {newMoviesList.length} total movies in the database</h5>
                  {filteredLen > 0 ? <p className="len-data">Showing&nbsp; {movLen > 1
                  ? <span>{movLen} &nbsp;movie's</span>
                  :<span>{movLen} movie</span> }&nbsp;
                  {(filteredLen / pageSize -1) > 0 ? <span>on page&nbsp; {currentPage} 
                  &nbsp;&nbsp;of&nbsp; {(Math.ceil(filteredLen / pageSize))} .</span> : ""}</p> : ""}
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
                  <span role="img" aria-label="img">&#128128;</span></button>
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
                  <button className="btn btn-danger btn-sm" 
                  onClick={() => this.handleDelete(m, movLen, currentPage)}>
                  <span role="img" aria-label="img">&#128128;</span></button>
                </td>
              </tr>
              )}
            </tbody>
          </table>

        </div>
        <InfoSideBar/>
      </div>

      <div className="row">
          <Pagination itemsCount={filteredLen} pageSize={pageSize}
          currentPage={currentPage} onPageChange={this.handlePageChange}
          onPagePrev={this.handlePrev} onPageNext={this.handleNext}/>
      </div>
    </div>
    );
  }
}
export default Movies;
