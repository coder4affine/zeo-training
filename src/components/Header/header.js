import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "../Loading/loading";

const header = ({ loading }) => {
  return (
    <nav>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      {"|"}
      <Link to="/courses" activeClassName="active">
        Courses
      </Link>
      {"|"}
      <Link to="/about" activeClassName="about">
        About
      </Link>
      {loading && <Loading />}
    </nav>
  );
};

header.PropTypes = {
  loading: PropTypes.bool
};

header.defaultProps = {
  loading: false
};

export default header;
