import React, { Component } from "react";
import PropTypes from "prop-types";

export default class todoForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
  };

  static defaultProps = {
    label: "Add Todo"
  };

  render() {
    const { onSubmit, value, onChange, label } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} required />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
