import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber -1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
};

// Main State Requirements ------

// state = { 
//   currentPage: 1,
//   pageSize: 4
// };

// Main component functions --------

// handlePageChange = page => {
//   console.log("page#",page)
//   this.setState({currentPage: page});
// };

// handleNext = (page, pagesCount) => {
//   if(page < pagesCount) {
//     this.setState({currentPage: page += 1});
//   }
//   this.setState({currentPage: page});
// };

// handlePrev = (page) => {
//   if(page > 1) {
//     this.setState({currentPage: page -= 1});
//   }
//   this.setState({currentPage: page});
// };

// Main component mark-up -----------------------

// const {List, pageSize, currentPage} = this.state;
// const paginatedItems = paginate(List, currentPage, pageSize);

// <Pagination itemsCount={count} pageSize={pageSize}
// currentPage={currentPage} onPageChange={this.handlePageChange}
// onPagePrev={this.handlePrev} onPageNext={this.handleNext}/>