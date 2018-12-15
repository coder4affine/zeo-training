import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "../../components/Tooltip/tooltip";

export default class home extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div class="container">
        <p>Hello Home</p>
        <Tooltip text="hello">Hi, I am a Tooltip</Tooltip>
      </div>
    );
  }
}
