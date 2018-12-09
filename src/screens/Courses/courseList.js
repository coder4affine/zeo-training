import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./courseListRow";

const courseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses &&
          courses.map(course => (
            <CourseListRow key={course.id} course={course} />
          ))}
      </tbody>
    </table>
  );
};

courseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default courseList;
