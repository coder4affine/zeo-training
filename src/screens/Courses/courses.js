import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/loading";
import CourseList from "./courseList";

import actions from "../../actions";

class courses extends Component {
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
)(courses);
