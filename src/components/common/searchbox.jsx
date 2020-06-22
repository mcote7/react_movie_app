import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"name="query" value={value} autoComplete="off"
      className="form-control search"placeholder="Search . . ."
      onChange={e => onChange(e.currentTarget.value)}/>
  );
};

export default SearchBox;