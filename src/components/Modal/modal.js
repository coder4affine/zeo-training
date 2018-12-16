import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class modal extends Component {
  constructor(props) {
    super(props);
    const id = "tooptip";
    this.domNode = document.querySelector(`#${id}`);
    if (!this.domNode) {
      this.domNode = document.createElement("div");
      this.domNode.setAttribute("id", id);
      document.body.appendChild(this.domNode);
    }
  }

  render() {
    const { children, active } = this.props;
    if (!active) return null;
    const source = (
      <div
        style={{
          position: "absolute",
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid black",
          height: 200,
          width: 200,
          top: "50%",
          left: "50%"
        }}
      >
        {children}
      </div>
    );
    return ReactDOM.createPortal(source, this.domNode);
  }
}

modal.propTypes = {};

export default modal;
