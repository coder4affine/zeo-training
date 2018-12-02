import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";

export default class App extends Component {
  static propTypes = {};

  state = {
    value: "",
    todoList: [],
    filteredList: [],
    currentState: "all"
  };

  componentDidMount() {
    document.addEventListener("copy", this.onCopy);
  }

  componentWillUnmount() {
    document.removeEventListener("copy", this.onCopy);
  }

  onCopy = () => {
    alert("copied");
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  submit = e => {
    console.log(e);
    e.preventDefault();
    const { value, todoList, currentState } = this.state;
    this.setState(
      {
        todoList: [
          ...todoList,
          {
            id: new Date().getUTCMilliseconds(),
            todoText: value,
            status: "pending"
          }
        ],
        value: ""
      },
      () => {
        this.filterData(currentState);
      }
    );
  };

  changeStatus = data => {
    const { todoList, currentState } = this.state;

    const index = todoList.findIndex(x => x.id === data.id);
    const updatedData = [
      ...todoList.slice(0, index),
      { ...data, status: data.status === "pending" ? "done" : "pending" },
      ...todoList.slice(index + 1)
    ];
    this.setState({ todoList: updatedData }, () => {
      this.filterData(currentState);
    });
  };

  deleteRecord = data => {
    const { todoList, currentState } = this.state;

    const index = todoList.findIndex(x => x.id === data.id);
    const updatedData = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1)
    ];
    this.setState({ todoList: updatedData }, () => {
      this.filterData(currentState);
    });
  };

  filterData = type => {
    const filteredList = this.getFilterData(type);
    this.setState({ filteredList, currentState: type });
  };

  getFilterData = type => {
    const { todoList } = this.state;
    let filteredList = [];
    switch (type) {
      case "pending":
        filteredList = todoList.filter(x => x.status === "pending");
        break;
      case "done":
        filteredList = todoList.filter(x => x.status === "done");
        break;

      default:
        filteredList = todoList;
        break;
    }
    return filteredList;
  };

  render() {
    const { value, filteredList } = this.state;
    return (
      <div>
        <h3> TODO Application</h3>
        {/* form  */}
        <TodoForm
          onSubmit={this.submit}
          value={value}
          onChange={this.onChange}
          label="Todo"
        />
        {/* data */}
        {filteredList.map((x, index) => (
          <div key={index}>
            <span onClick={() => this.changeStatus(x)}>
              <span>{x.todoText}</span>
              <span style={{ color: "green" }}> {x.status}</span>
            </span>
            <span style={{ color: "red" }} onClick={() => this.deleteRecord(x)}>
              Delete
            </span>
          </div>
        ))}
        {/* filtering */}
        <button onClick={() => this.filterData("all")}>All Task</button>
        <button onClick={() => this.filterData("done")}>Completed Task</button>
        <button onClick={() => this.filterData("pending")}>Pending Task</button>
      </div>
    );
  }
}
