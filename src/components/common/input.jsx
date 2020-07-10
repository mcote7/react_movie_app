import React from 'react';

const Input = ({name, label, error, ...rest}) => {
  return (
      <div className="form-control twitterInputCont mb-3">
        <label htmlFor={name}>{label}</label>
        <input {...rest}
        name={name} id={name} aria-autocomplete="none"
        spellCheck="false" autoComplete="off" className="form-control shadow-none twitterInput m-0 p-0"/>
        {error && <div className="errorMess p-2 mx-1">{error}</div>}
      </div>
  );
}
export default Input;

