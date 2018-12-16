import React, { Component, Fragment, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch } from "react-router-dom";
import Loading from "./components/Loading/loading";

const AsyncHome = lazy(() => import("./screens/Home/home"));

const AsyncCourses = lazy(() => import("./screens/Courses/courses"));

const AsyncCourse = lazy(() => import("./screens/Courses/course"));

const AsyncAbout = lazy(() => import("./screens/About/about"));

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
  static propTypes = {};

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={() => <AsyncHome />} />
          <Route path="/courses/" component={() => <AsyncCourses />} />
          <Route path="/course/:id" component={() => <AsyncCourse />} />
          <Route path="/course" component={() => <AsyncCourse />} />
          <Route path="/about" component={() => <AsyncAbout />} />
        </Switch>
      </Suspense>
    );
  }
}
