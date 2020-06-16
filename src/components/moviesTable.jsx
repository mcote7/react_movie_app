import React, {Component} from 'react';
import Table from './common/table';
import Like from './common/like';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { label: 'Like', content: m =>
    (<Like liked={m.liked} onLike={() => this.props.onLike(m)}/>)},
    { label: 'Delete', content: m =>
    (<button className="btn btn-danger btn-sm"
    onClick={() => this.props.onDelete(m, this.props.movLen, this.props.currentPage)}>
    <span role="img" aria-label="img">&#128128;</span></button>)}
  ];
  render() {
    const { count, movies, sortColumn, onSort } = this.props;
    return (
      <Table columns={this.columns} count={count} data={movies} sortColumn={sortColumn} onSort={onSort}/>
    );
  }
}
export default MoviesTable;
