import React from 'react';

const Password = ({name, label, value, onChange, type, eye, onVisable}) => {
  return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="input-group-prepend">
          <input spellCheck="false" value={value}
          onChange={onChange} name={name}
          id={name} type={type} className="form-control"/>
          <div onClick={onVisable}
          className="input-group-text btn">
          <i className={eye} aria-hidden="true"></i></div>
        </div>
      </div>
  );
}
export default Password;