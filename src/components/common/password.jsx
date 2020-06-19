import React from 'react';

const Password = ({name, label, value, error, onChange, type, eye, onVisable}) => {
  return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="input-group-prepend">
          <input autoComplete="off"
          spellCheck="false" value={value}
          onChange={onChange} name={name}
          id={name} type={type} className="form-control"/>
          <div onClick={onVisable}
          className="input-group-text btn">
          <i className={eye} aria-hidden="true"></i></div>
        </div>
        {error && <span className="errorMess pt-1 pb-2 px-2 ml-1">{error}</span>}
      </div>
  );
}
export default Password;