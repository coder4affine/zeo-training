import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./route";
import Header from "./components/Header/header";
import Footer from "./footer";

export const AppContext = React.createContext();

export default class App extends Component {
  static propTypes = {};

  state = {
    language: "en",
    changeLanguage: () => {
      this.setState({ language: "es" });
    }
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <AppContext.Provider value={this.state}>
            <Route />
          </AppContext.Provider>
          {/* <Footer /> */}
        </Fragment>
      </Router>
    );
  }
}
