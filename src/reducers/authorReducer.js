import * as types from "../constants/actionTypes";

const initialState = {
  loading: false,
  authors: [],
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_AUTHOR:
      return { ...state, loading: true };

    case types.LOAD_AUTHOR_SUCCESS:
      return { ...state, loading: false, authors: payload };

    case types.LOAD_AUTHOR_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
