import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-control twitterInputCont mb-3">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control shadow-none twitterInput m-0 p-0">
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>{option.name}</option>
          ))}
      </select>
      {error && <div className="errorMess p-2 mx-1">{error}</div>}
    </div>
  );
};
export default Select;