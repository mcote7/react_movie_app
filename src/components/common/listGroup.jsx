import React from 'react';

const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedItem, movieCount}) => {
  return (
  <ul className="list-group hovCard">
    {items && items.map((i, idx) => (
      <li key={i[valueProperty] || idx} onClick={() => onItemSelect(i)}
      className={i === selectedItem ? "list-group-item active" : "list-group-item not-active"}>{i[textProperty]}&nbsp;
      <span>{i === selectedItem ? <p style={{display: "inline", color: "black"}}>({movieCount})</p>:''}</span>
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