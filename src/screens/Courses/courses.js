import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/loading";
import CourseList from "./courseList";

import actions from "../../actions";

export class Courses extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    props.actions.loadCourses();
  }

  render() {
    const {
      coursesData: { loading, courses, error }
    } = this.props;

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <h2>Oops! something went wrong</h2>;
    }
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coursesData: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
