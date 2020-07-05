import React from "react";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Loading from './common/loading';
import Form from "./common/form";
import MovieInfo from './movieInfo';

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    isLoading: false,
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate")
  };

  async populateGenres() {
    const {data: genres} = await getGenres();
    this.setState({genres});
  };

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      const {data: movie} = await getMovie(movieId);
      this.setState({data: this.mapToViewModel(movie)});
    }
    catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  };

  async componentDidMount() {
    this.setState({isLoading: true});
    await this.populateGenres();
    await this.populateMovie();
    this.setState({isLoading: false});
  };

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = async () => {
    try {
      await saveMovie(this.state.data);
      this.props.history.push("/movies");
    }
    catch (ex) {
      console.log("error", ex)
      if(ex.response && ex.response.status === 500) {
        const errors = {...this.state.errors};
        errors.title = "A movie with this title already exists.";
        this.setState({errors});
      }
    }
  };

  render() {
    const {match} = this.props;
    const {isLoading} = this.state;
    if(isLoading) return <Loading/>;
    return (
    <React.Fragment>
      {match.params.id === 'new' ? <h1 className="formTitle">New Movie</h1> : <h1 className="formTitle">Edit Movie</h1>}
      <div className="row">
        <div className="col-5">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderSelect("genreId", "Genre", this.state.genres)}
            {this.renderInput("numberInStock", "Number in Stock", "number")}
            {this.renderInput("dailyRentalRate", "Rate", "number")}
            {this.renderButton("Submit")}
          </form>
        </div>
      <MovieInfo/>
    </div>
    </React.Fragment>
    );
  }
};

export default MovieForm;