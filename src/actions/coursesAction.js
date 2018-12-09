import * as types from "../constants/actionTypes";
import CourseApi from "../API/mockCourseApi";

export const loadCourses = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_COURSES });
    return CourseApi.getAllCourses()
      .then(courses =>
        dispatch({ type: types.LOAD_COURSES_SUCCESS, payload: courses })
      )
      .catch(err => dispatch({ type: types.LOAD_COURSES_FAIL, payload: err }));
  };
};

export const saveCourse = course => {
  return dispatch => {
    dispatch({ type: types.LOAD_COURSES });
    return CourseApi.saveCourse(course)
      .then(courses => {
        if (course.id) {
          dispatch({ type: types.UPDATE_COURSE_SUCCESS, payload: courses });
        } else {
          dispatch({ type: types.SAVE_COURSE_SUCCESS, payload: courses });
        }
      })
      .catch(err => dispatch({ type: types.LOAD_COURSES_FAIL, payload: err }));
  };
};
