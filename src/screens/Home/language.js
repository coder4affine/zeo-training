import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../App";

export default class language extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context => {
            return (
              <div>
                <p>Current language: {context.language}</p>
                <button onClick={context.changeLanguage}>
                  Change Language
                </button>
              </div>
            );
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}
