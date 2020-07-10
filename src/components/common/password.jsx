import React from 'react';

const Password = ({name, label, value, error, onChange, type, eye, onVisable}) => {
  return (
      <div className="form-control twitterInputCont mb-3">
        <label htmlFor={name}>{label}</label>
        <div className="input-group-prepend">
          <input autoComplete="off" aria-autocomplete="none"
          spellCheck="false" value={value}
          onChange={onChange} name={name}
          id={name} type={type} className="form-control shadow-none twitterInput m-0 p-0"/>
          <div onClick={onVisable}
          className="input-group-text twitterInput">
          <i className={eye} aria-hidden="true"></i></div>
        </div>
        {error && <div className="errorMess p-2 mx-1">{error}</div>}
      </div>
  );
}
export default Password;