import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class header extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details/">Details</Link>
            </li>
            <li>
              <Link to="/settings/">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
