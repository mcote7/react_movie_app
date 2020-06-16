import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import {paginate} from '../utilitys/paginate';
import {sortTheMovies} from '../utilitys/movieSort';
import ListGroup from './common/listGroup';
import InfoTopBar from './infoTopBar';
import MoviesTable from './moviesTable';
import InfoSideBar from './common/infoSideBar';
import Pagination from './common/pagination';
import SoldOut from './common/soldOut';
import _ from 'lodash';

class Movies extends Component {
  state = { 
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" },...getGenres()];
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

  handleSort = path => {
    // console.log("path:", path)
    const sortColumn = {...this.state.sortColumn};
    if(sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn })
  };

  render() {
    const {length: count} = this.state.movies;
    if(count === 0) {
      return(
        <SoldOut/>
      );
    }
    const {pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn} = this.state;
    const newMoviesList = sortTheMovies(allMovies);
    const filtered = selectedGenre && selectedGenre._id
    ? newMoviesList.filter(m => m.genre._id === selectedGenre._id)
    : newMoviesList;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
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
              <InfoTopBar newMoviesList={newMoviesList} filteredLen={filteredLen}
              movLen={movLen} pageSize={pageSize} currentPage={currentPage}/>
          </div>
            <MoviesTable count={count} movies={movies}  movLen={movLen} currentPage={currentPage}
            onDeleteAll={this.handleDeleteAll} onLike={this.handleLike}
            onDelete={this.handleDelete} onSort={this.handleSort}/>
        </div>
        <InfoSideBar currentPage={currentPage}/>
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
