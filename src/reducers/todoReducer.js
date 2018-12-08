const initialState = {
  loading: false,
  todos: [],
  error: false
};

export default (state = initialState, { type, payload, filterType }) => {
  switch (type) {
    case "LOAD_TODO":
      return { ...state, loading: true };

    case "LOAD_TODO_SUCCESS":
      return { ...state, loading: false, todos: payload };

    case "TODO_ERROR":
      return { ...state, loading: false, error: payload };

    case "SAVE_TODO_SUCCESS":
      return { ...state, loading: false, todos: [payload, ...state.todos] };

    case "FILTER_DATA":
      let filterTodos = payload;
      if (filterType === "pending") {
        filterTodos = payload.filter(x => !x.completed);
      }
      if (filterType === "completed") {
        filterTodos = payload.filter(x => x.completed);
      }

      return {
        ...state,
        loading: false,
        todos: filterTodos
      };

    default:
      return state;
  }
};
