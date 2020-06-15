import React from 'react';

const ListGroup = (props) => {
  const {items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem} = props;
  return (
  <ul className="list-group">
    {/* <li className="list-group-item list-group-item-action">All Genres</li> */}
    {items && items.map(i => (
      <li key={i[valueProperty]} onClick={() => onItemSelect(i)}
      className={i === selectedItem ? "list-group-item active" : "list-group-item not-active"}>{i[textProperty]}
      <span style={{float: "right"}}><i className={i === selectedItem
      ? "fa fa-chevron-circle-left" : "fa fa-chevron-circle-right"} aria-hidden="true"></i></span></li>
    ))}
  </ul>
  );
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty:"_id"
};
export default ListGroup;
//Can reuse with any List//