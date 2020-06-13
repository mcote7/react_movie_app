import React from 'react';

const Pagination = () => {
  return (
    <div classNameName="row">
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-lg">
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Previous">
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Next">
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination