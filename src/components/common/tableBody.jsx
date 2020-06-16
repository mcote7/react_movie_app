import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
  renderCell = (item, column) => {
    if(column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { count, data, columns } = this.props;
    return (
      <tbody>
        {count > 0 && data.map((item, idx) =>
          <tr key={idx}>
            {columns.map((column, i) => column.path === 'title'
            ? <td key={i}><a href="/">{this.renderCell(item, column)}</a></td>
            : <td key={i}>{this.renderCell(item, column)}</td>)}
          </tr>)}
      </tbody>
    );
  }
}
export default TableBody;
