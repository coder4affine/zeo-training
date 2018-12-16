import React, { PureComponent, lazy, Suspense, StrictMode } from "react";
import PropTypes from "prop-types";
import Tooltip from "../../components/Tooltip/tooltip";

const Child = lazy(() => import("./child"));

export default class home extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      data: {
        name: {
          fistName: "yagnesh"
        }
      }
    };
    this.pTag = React.createRef();
    this.child = React.createRef();
  }

  componentWillMount() {}

  componentDidMount() {
    this.pTag.current.setAttribute("id", "ptag");
  }

  showAlert = () => {
    // this.child.current.showAlert();
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <p ref={this.pTag}>Hello Home</p>
        <button onClick={this.showAlert}>Show Alert</button>
        <Suspense fallback={<div>Loading....</div>}>
          <Child />
        </Suspense>
      </div>
    );
  }
}
