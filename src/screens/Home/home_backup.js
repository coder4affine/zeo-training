import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import todoActions from "../../actions/todoAction";
import hoc from "../../HOC/hoc";

// import Language from "./language";

class home extends Component {
  static propTypes = {};

  state = {
    todo: ""
  };

  constructor(props) {
    super(props);
    props.actions.loadTodo();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.props.actions.saveTodo({
      userId: 1,
      title: this.state.todo,
      completed: false
    });
  };

  filterData = type => {
    this.props.actions.filterTodo(type);
  };

  render() {
    const {
      todo: { loading, todos, error },
      loadTodo
    } = this.props;
    const { todo } = this.state;
    return (
      <div>
        {loading && <p>Loading....</p>}
        {error && <p>Oops! something went wrong....</p>}
        <form onSubmit={this.submit}>
          <div>
            <input
              type="text"
              name="todo"
              placeholder="Add Todo"
              value={todo}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input type="submit" value="Add ToDO" />
          </div>
        </form>
        <div>
          <button onClick={() => this.filterData("all")}>All</button>
          <button onClick={() => this.filterData("pending")}>Pending</button>
          <button onClick={() => this.filterData("completed")}>
            Completed
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <td>Todo Title</td>
              <td>Is Completed</td>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 &&
              todos.map(data => (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.completed ? "Compted" : "Pending"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hoc(home));
