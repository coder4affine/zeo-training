import * as types from "../constants/actionTypes";

const initialState = {
  loading: false,
  courses: [],
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_COURSES:
      return { ...state, loading: true };

    case types.LOAD_COURSES_SUCCESS:
      return { ...state, loading: false, courses: payload };

    case types.SAVE_COURSE_SUCCESS:
      return { ...state, loading: false, courses: [...state.courses, payload] };

    case types.UPDATE_COURSE_SUCCESS: {
      const index = state.courses.findIndex(x => x.id === payload.id);

      return {
        ...state,
        loading: false,
        courses: [
          ...state.courses.slice(0, index),
          payload,
          ...state.courses.slice(index + 1)
        ]
      };
    }

    case types.LOAD_COURSES_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
