import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextInput from "../../components/TextInput/textInput";
import SelectInput from "../../components/SelectInput/selectInput";
import actions from "../../actions";

const validateCourse = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 100) {
    errors.title = "Must be 100 characters or less";
  }

  if (!values.authorId) {
    errors.authorId = "Required";
  }

  if (!values.category) {
    errors.category = "Required";
  } else if (values.category.length > 20) {
    errors.category = "Must be 20 characters or less";
  }

  if (!values.length) {
    errors.length = "Required";
  }
  return errors;
};

class coursePage extends Component {
  static propTypes = {};

  static contextType = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      saving: false,
      course: props.course
    };
    this.props.actions.loadCourses();
    this.props.actions.loadAuthors();
  }

  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(this.props.course) !== JSON.stringify(nextProps.course)
    ) {
      this.setState({ course: nextProps.course });
    }
  }

  onChange = e => {
    this.setState({
      course: { ...this.props.course, [e.target.name]: e.target.value }
    });
  };

  submit = e => {
    e.preventDefault();
    this.setState({ saving: true });
    const errors = validateCourse(this.state.course);
    this.setState({ errors });
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      this.props.actions
        .saveCourse(this.state.course)
        .then(() => this.props.history.push("/courses"))
        .finally(() => this.setState({ saving: false }));
    } else {
      this.setState({ saving: false });
    }
  };

  render() {
    const {
      authors: { authors }
    } = this.props;
    const { errors, saving, course } = this.state;
    const formatedAuthors = authors.map(author => {
      return {
        value: author.id,
        text: `${author.firstName} ${author.lastName}`
      };
    });
    return (
      <div>
        <p>Course</p>
        {course && formatedAuthors && (
          <form onSubmit={this.submit}>
            <h1>Manage Course</h1>
            <TextInput
              name="title"
              label="Title"
              placeholder="Title"
              value={course.title}
              onChange={this.onChange}
              error={errors.title}
            />
            <SelectInput
              name="authorId"
              label="Author"
              value={course.authorId}
              onChange={this.onChange}
              error={errors.authorId}
              options={formatedAuthors}
              defaultOption="Select Author"
            />
            <TextInput
              name="category"
              label="Category"
              placeholder="Category"
              value={course.category}
              onChange={this.onChange}
              error={errors.category}
            />
            <TextInput
              name="length"
              label="Length"
              placeholder="Length"
              value={course.length}
              onChange={this.onChange}
              error={errors.length}
            />
            <input
              type="submit"
              disabled={saving}
              value={saving ? "Saving..." : "Save"}
              className=" btn  btn-primary"
            />
          </form>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id;
  console.log(state.courses.courses);

  let course = null;

  if (courseId && state.courses.courses.length > 0) {
    course = state.courses.courses.find(x => x.id === courseId);
  }
  console.log(state.authors);

  return {
    course: course,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(coursePage);
