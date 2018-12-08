import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

// import Home from "./screens/Home/home";
// import Details from "./screens/Details/details";
// import Settings from "./screens/Settings/settings";

const AsyncHome = Loadable({
  loader: () => import("./screens/Home/home"),
  loading: () => <div>Loading...</div>
});

const AsyncDetails = Loadable({
  loader: () => import("./screens/Details/details"),
  loading: () => <div>Loading...</div>
});

const AsyncSettings = Loadable({
  loader: () => import("./screens/Settings/settings"),
  loading: () => <div>Loading...</div>
});

const isAuthenticated = true;

const NoMatch = () => <p>Path not found</p>;

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default class route extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Fragment>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/details/" component={AsyncDetails} />
        <PrivateRoute path="/settings/" component={AsyncSettings} />
      </Fragment>
    );
  }
}
