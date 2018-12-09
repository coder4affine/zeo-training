import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./components/Loading/loading";

const AsyncHome = Loadable({
  loader: () => import("./screens/Home/home"),
  loading: () => <Loading />
});

const AsyncCourses = Loadable({
  loader: () => import("./screens/Courses/courses"),
  loading: () => <Loading />
});

const AsyncCourse = Loadable({
  loader: () => import("./screens/Courses/course"),
  loading: () => <Loading />
});

const AsyncAbout = Loadable({
  loader: () => import("./screens/About/about"),
  loading: () => <Loading />
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
        <Route path="/courses/" component={AsyncCourses} />
        <Route path="/course/:id" component={AsyncCourse} />
        {/* <Route path="/course" component={AsyncCourse} /> */}
        <Route path="/about" component={AsyncAbout} />
      </Fragment>
    );
  }
}
