import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tooltip from "../../components/Tooltip/tooltip";
import Modal from "../../components/Modal/modal";

class courseListRow extends Component {
  state = { active: false };
  toggleModal = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    const { course } = this.props;
    const { active } = this.state;
    return (
      <tr>
        <td>
          <a href={course.watchHref}>Watch</a>
        </td>
        <td>
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </td>
        <td>
          <Tooltip text={`tooptip ${course.id}`}>{course.authorId}</Tooltip>
        </td>
        <td>
          <span onClick={this.toggleModal} role="button">
            {course.category}
          </span>
          <Modal active={active}>
            <div>
              <div>
                <span role="button" onClick={this.toggleModal}>
                  Close
                </span>
              </div>
              <div>this is modal</div>
            </div>
          </Modal>
        </td>
        <td>{course.length}</td>
      </tr>
    );
  }
}

courseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default courseListRow;
