import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "../Loading/loading";

const header = ({ loading }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {"|"}
      <Link to="/courses">Courses</Link>
      {"|"}
      <Link to="/about">About</Link>
      {loading && <Loading />}
    </nav>
  );
};

header.propTypes = {
  loading: PropTypes.bool
};

header.defaultProps = {
  loading: false
};

export default header;
