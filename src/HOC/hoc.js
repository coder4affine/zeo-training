import React, { Component } from "react";
import PropTypes from "prop-types";

export default WrappedComponent => {
  class hocComponent extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log("shouldComponentUpdate");
      if (
        JSON.stringify(nextProps) !== JSON.stringify(this.props) ||
        JSON.stringify(nextState) !== JSON.stringify(this.state) ||
        JSON.stringify(nextContext) !== JSON.stringify(this.context)
      ) {
        return true;
      }
      return false;
    }

    getData = () => {
      alert("getData");
    };

    render() {
      return (
        <div>
          <p>Hello Guest</p>
          <WrappedComponent getData={this.getData} {...this.props} />
        </div>
      );
    }
  }

  hocComponent.propTypes = {};

  return hocComponent;
};
