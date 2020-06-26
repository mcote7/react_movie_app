import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
    if(sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if(column.path !== sortColumn.path) return null;
    if(sortColumn.order === 'asc') return <i className="fa fa-chevron-up"></i>
    return <i className="fa fa-chevron-down"></i>
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c, idx) =>
          !c.path ? <th key={idx}>{c.label}</th>
          : <th style={{cursor: "pointer"}}
          key={idx} onClick={() =>
          this.raiseSort(c.path)}>{c.label}
          &nbsp;&nbsp;&nbsp;
          {this.renderSortIcon(c)}</th>)}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;