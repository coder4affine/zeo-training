import React, { Component } from "react";
import PropTypes from "prop-types";
import Language from "./language";

export default class home extends Component {
  static propTypes = {};

  addData = () => {};

  render() {
    return (
      <div>
        <Language />
        <p>this is my home page</p>
        <button onClick={this.addData}>Add Data</button>
      </div>
    );
  }
}
