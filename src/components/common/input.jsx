import React from 'react';

const Input = ({name, label, value, error, onChange}) => {
  return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input autoComplete="off"
        spellCheck="false" autoFocus value={value}
        onChange={onChange} name={name}
        id={name} type="text" className="form-control"/>
        {error && <span className="errorMess pt-1 pb-2 px-2 ml-1">{error}</span>}
      </div>
  );
}
export default Input;

