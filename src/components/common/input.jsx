import React from 'react';

const Input = ({name, label, value, error, onChange}) => {
  return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input autoComplete="off"
        spellCheck="false" autoFocus value={value}
        onChange={onChange} name={name}
        id={name} type="text" className="form-control"/>
        {error && <div className="errorMess p-2 mx-1">{error}</div>}
      </div>
  );
}
export default Input;

