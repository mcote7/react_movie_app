import React from 'react';
import _ from 'lodash';

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange} = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="row">
      <nav className="ml-3">
        <ul className="pagination pagination-lg">
          <li className="page-item"><a className="page-link icon" aria-label="Previous">
            <i className="fa fa-chevron-circle-left" aria-hidden="true"></i></a></li>

            {pages.map(p => (
            <li key={p} className={ p === currentPage ? "page-item active" : "page-item"}>
            <a className="page-link" onClick={() => onPageChange(p)}>{p}</a></li>
            ))}

          <li className="page-item"><a className="page-link icon" aria-label="Next">
            <i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
