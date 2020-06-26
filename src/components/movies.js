import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {getMovies, deleteMovie} from '../services/movieService';
import {getGenres} from '../services/genreService';
import {paginate} from '../utilitys/paginate';
import {removeThe} from '../utilitys/removeThe';
import ListGroup from './common/listGroup';
import InfoTopBar from './infoTopBar';
import SearchBox from './common/searchbox';
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
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: 'title', order: 'asc' },
    isLoading: false
  };

  async componentDidMount() {
    this.setState({isLoading: true});
    const {data} = await getGenres();
    const genres = [{ name: "All Genres" },...data];
    const {data: movies} = await getMovies();
    this.setState({movies, genres});
    this.setState({isLoading: false});
  };

  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    // , currentPage: 1, selectedGenre: "All Genres" 

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      toast("error with delete.");

      this.setState({ movies: originalMovies });
    }
  };

  handleDeleteAll = () => {
    this.setState({movies: ''});
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked
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
    this.setState({selectedGenre: genre, searchQuery: "", currentPage: 1, sortColumn: { path: 'title', order: 'asc' }})
    console.log("Genre:", genre)
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    // console.log("path:", sortColumn)
    this.setState({ sortColumn })
  };
//search >>>
  getPagedData = () => {
    const {pageSize, currentPage, selectedGenre, searchQuery,
    movies: allMovies, sortColumn} = this.state;
    const newMoviesList = removeThe(allMovies);
//search >>
    let filtered = newMoviesList;
    if (searchQuery)
      filtered = newMoviesList.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = newMoviesList.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies }
  };

  render() {
    const {length: count} = this.state.movies;
    const {pageSize, currentPage, selectedGenre, genres, sortColumn, searchQuery, isLoading} = this.state;
    const {user} = this.props;
    const {totalCount, data: movies} = this.getPagedData();
    const movLen = movies.length;
    if(isLoading) return <h1 style={{color: "red"}}><span className="App-logo"><i className="fa fa-spinner fa-5x" aria-hidden="true"></i></span> Loading. . .</h1>;
    if(count === 0) return <SoldOut/>;
    return (
    <React.Fragment>
      <div className="row mt-3">
        <div className="col-10">
          <div className="row mb-2">
            <div className="col-3">
              <ListGroup items={genres}
              onItemSelect={this.handleGenreSelect} selectedItem={selectedGenre}/>
            </div>
            <div className="col-8 ml-3 p-0">
              <InfoTopBar count={count} filteredLen={totalCount}
              movLen={movLen} pageSize={pageSize} currentPage={currentPage}/>
              <hr className="mt-4"/>
              <SearchBox value={searchQuery} onChange={this.handleSearch}/>
            </div>
          </div>
            {totalCount > 0 ?
            <MoviesTable count={count} movies={movies} movLen={movLen}
            currentPage={currentPage}sortColumn={sortColumn} onLike={this.handleLike}
            onDelete={this.handleDelete} onSort={this.handleSort}/>:''}
        </div>
        <InfoSideBar currentPage={currentPage} onDeleteAll={this.handleDeleteAll}/>
      </div>
      <div className="row">
        {totalCount > 0 ?
        <Pagination itemsCount={totalCount} pageSize={pageSize}
        currentPage={currentPage} onPageChange={this.handlePageChange}
        onPagePrev={this.handlePrev} onPageNext={this.handleNext}/>:''}
        <div className="col">
          {user && <Link to="/movies/new" className="btn btn-primary ml-5">Add New Movie</Link>}
        </div>
      </div>
    </React.Fragment>
    );
  }
}
export default Movies;
