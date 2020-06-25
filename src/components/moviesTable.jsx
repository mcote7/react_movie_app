import React, {Component} from 'react';
import auth from '../services/authService';
import {Link} from "react-router-dom";
import Table from './common/table';
import Like from './common/like';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title', content: m =>
    <Link to={`/movies/${m._id}`}>{m.title}</Link>},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { label: 'Like', content: m =>
    (<Like liked={m.liked} onLike={() => this.props.onLike(m)}/>)}
  ];

  deleteColumn = { label: 'Delete', content: m =>
    (<button className="btn btn-danger btn-sm"
    onClick={() => this.props.onDelete(m, this.props.movLen, this.props.currentPage)}>
    <span role="img" aria-label="img">&#128128;</span></button>)}

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if(user && user.isAdmin) this.columns.push(this.deleteColumn);
  }


  render() {
    const { count, movies, sortColumn, onSort } = this.props;
    return (
      <Table columns={this.columns} count={count} data={movies} sortColumn={sortColumn} onSort={onSort}/>
    );
  };
};
export default MoviesTable;
