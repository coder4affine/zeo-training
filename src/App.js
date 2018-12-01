import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    show: false
  };

  showHide = () => {
    this.setState(state => {
      return { show: !state.show };
    });
  };

  render = () => {
    const { show } = this.state;
    return (
      <div className="app-container">
        {show && <p>Show</p>}
        <button onClick={this.showHide}>Show/Hide</button>
      </div>
    );
  };
}

export default App;
