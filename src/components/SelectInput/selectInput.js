import React from "react";
import PropTypes from "prop-types";

const selectInput = ({
  name,
  label,
  error,
  onChange,
  options,
  defaultOption,
  value
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

selectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

selectInput.defaultProps = {
  error: ""
};

export default selectInput;
