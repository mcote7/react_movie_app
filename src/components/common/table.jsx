import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = props => {
  const { columns, sortColumn, onSort, count, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
      <TableBody count={count} data={data} columns={columns}/>
    </table>
  );
}

export default Table;