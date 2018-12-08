const loadTodo = () => {
  return dispatch => {
    dispatch({ type: "LOAD_TODO" });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => dispatch({ type: "LOAD_TODO_SUCCESS", payload: json }))
      .catch(err => dispatch({ type: "TODO_ERROR", payload: err }));
  };
};

const filterTodo = payload => {
  return dispatch => {
    dispatch({ type: "LOAD_TODO" });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json =>
        dispatch({ type: "FILTER_DATA", payload: json, filterType: payload })
      )
      .catch(err => dispatch({ type: "TODO_ERROR", payload: err }));
  };
};

const saveTodo = todo => {
  return dispatch => {
    dispatch({ type: "LOAD_TODO" });
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(json => dispatch({ type: "SAVE_TODO_SUCCESS", payload: json }))
      .catch(err => dispatch({ type: "TODO_ERROR", payload: err }));
  };
};

export default {
  loadTodo,
  filterTodo,
  saveTodo
};
