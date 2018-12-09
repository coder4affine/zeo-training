import React, { Component } from "react";
import PropTypes from "prop-types";

export default class loading extends Component {
  static propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
  };

  static defaultProps = {
    interval: 300,
    dots: 3
  };

  state = {
    frame: 1
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { frame } = this.state;
    let dots = frame % (this.props.dots + 1);
    let text = "";
    while (dots > 0) {
      text += ".";
      dots--;
    }

    return <span {...this.props}>{`${text} `}</span>;
  }
}
