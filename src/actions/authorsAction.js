import * as types from "../constants/actionTypes";
import AuthorApi from "../API/mockAuthorApi";

export const loadAuthors = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_AUTHOR });
    return AuthorApi.getAllAuthors()
      .then(authors =>
        dispatch({ type: types.LOAD_AUTHOR_SUCCESS, payload: authors })
      )
      .catch(err => dispatch({ type: types.LOAD_AUTHOR_FAIL, payload: err }));
  };
};
