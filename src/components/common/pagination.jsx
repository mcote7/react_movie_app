import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
//npm i imports*
const Pagination = ({itemsCount, pageSize, currentPage, onPageChange, onPageNext, onPagePrev}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
      <nav className="ml-3">
        <ul className="pagination pagination-lg hovCard">
          <li className="page-item"><a onClick={() => onPagePrev(currentPage)} className="page-link icon" aria-label="Previous">
          <i className="fa fa-chevron-circle-left" aria-hidden="true"></i></a></li>

          {pagesCount >= 9 ? <li className="hideOnPhone page-item"><p className="px-3 pt-3">({currentPage}) of {pagesCount}</p></li>:
          pages.map(p => (
          <li key={p} className={ p === currentPage ? "hideOnPhone page-item active" : "hideOnPhone page-item"}>
          <a className="page-link" onClick={() => onPageChange(p)}>{p}</a></li>
          ))}

          <li className="page-item"><a onClick={() => onPageNext(currentPage, pagesCount)} className="page-link icon" aria-label="Next">
          <i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageNext: PropTypes.func.isRequired,
  onPagePrev: PropTypes.func.isRequired
};
export default Pagination;

// npm i bootatrap font-awesome
