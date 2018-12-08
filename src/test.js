import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => (
  <Fragment>
    <p>Current Book: {book.bookName}</p>
  </Fragment>
);

export default class test extends Component {
  static propTypes = {};

  state = {
    hasError: false,
    book: {
      bookName: "Learn React"
    }
  };

  componentDidCatch = () => {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  };

  update = () => {
    this.setState({
      book: null
    });
  };

  render() {
    const { hasError, book } = this.state;
    if (hasError) {
      return <p>Oops! something went wrong</p>;
    } else {
      return (
        <Fragment>
          <Book book={book} />
          <button onClick={this.update}>Update Book Name</button>
        </Fragment>
      );
    }
  }
}
