import React from "react";

const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        placeholder={`Enter your ${name}`}
      />
    </div>
  );
};

export default FormRow;
