import React, { Component } from "react";
import PropTypes from "prop-types";

export default class home extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div class="container">
        <p>Hello Home</p>
      </div>
    );
  }
}
