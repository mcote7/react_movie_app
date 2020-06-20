import React from 'react';

const Input = ({name, label, error, ...rest}) => {
  return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest}
        name={name} id={name}
        autoFocus spellCheck="false" autoComplete="off" className="form-control"/>
        {error && <div className="errorMess p-2 mx-1">{error}</div>}
      </div>
  );
}
export default Input;

