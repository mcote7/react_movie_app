import React, {Component} from 'react';
import Like from './common/like';

class MoviesTable extends Component {
  render() {
    const { count, movies, movLen,
      currentPage, onDeleteAll, onLike,
      onDelete, onSort} = this.props;
    return (
      <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort('title')}>Title</th>
          <th onClick={() => onSort('genre.name')}>Genre</th>
          <th onClick={() => onSort('numberInStock')}>Stock</th>
          <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
          <th>Like</th>
          <th onClick={() => onDeleteAll()}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {count > 0 && movies.map((m) =>
        <tr key={m._id}>
          <td><a href="/">{m.title}</a></td>
          <td>{m.genre.name}</td>
          <td>{m.numberInStock}</td>
          <td>{m.dailyRentalRate}</td>
          <td>
            <Like liked={m.liked} onLike={() => onLike(m)}/>
          </td>
          <td>
            <button className="btn btn-danger btn-sm" 
            onClick={() => onDelete(m, movLen, currentPage)}>
            <span role="img" aria-label="img">&#128128;</span></button>
          </td>
        </tr>
        )}
      </tbody>
    </table>
    );
  }
}
export default MoviesTable;
