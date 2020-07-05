import React from 'react';

const Input = ({name, label, error, ...rest}) => {
  return (
      <div className="form-control twitterInputCont mb-2">
        <label htmlFor={name}>{label}</label>
        <input {...rest}
        name={name} id={name}
        spellCheck="false" autoComplete="off" className="form-control shadow-none twitterInput"/>
        {error && <div className="errorMess p-2 mx-1">{error}</div>}
      </div>
  );
}
export default Input;

