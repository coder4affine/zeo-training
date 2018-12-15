import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { XMLNS_1_0 } from "xmlchars";

export default class tooltip extends PureComponent {
  constructor(props) {
    super(props);
    const id = "tooptip";
    this.state = {
      active: false
    };
    this.sourceRef = React.createRef();
    this.domNode = document.querySelector(`#${id}`);
    if (!this.domNode) {
      this.domNode = document.createElement("div");
      this.domNode.setAttribute("id", id);
      document.body.appendChild(this.domNode);
    }
  }

  renderTootip = () => {
    if (!this.state.active) return null;

    const { top, left, width } = this.sourceRef.current.getBoundingClientRect();
    const tooltip = {
      position: "absolute",
      bottom: window.innerHeight - top + 8 - window.scrollY,
      left: left + width / 2 + window.scrollX
    };
    return ReactDOM.createPortal(
      <div style={tooltip}>
        <div
          role="tooltip"
          style={{
            position: "relative",
            left: "-50%",
            padding: "8px 16px",
            borderRadius: 4,
            background: "#424242",
            color: "white"
          }}
        >
          {this.props.text}
          <span
            style={{
              position: "absolute",
              bottom: -10,
              left: "calc(50% - 5px",
              borderWidth: 5,
              borderStyle: "solid",
              borderColor: "#424242 transparent transparent transparent"
            }}
          />
        </div>
      </div>,
      this.domNode
    );
  };

  showTooltip = () => {
    this.setState({ active: true });
  };

  hideTooltip = () => {
    this.setState({ active: false });
  };

  render() {
    const { children } = this.props;
    const source = (
      <span
        ref={this.sourceRef}
        tabIndex="0"
        role="button"
        key="0"
        area-describedby="tooltip-content"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        onFocus={this.showTooltip}
        onBlur={this.hideTooltip}
      >
        {children}
      </span>
    );
    return [source, this.renderTootip()];
  }
}
