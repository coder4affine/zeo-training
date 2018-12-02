import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import "./login.css";

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

export default class login extends Component {
  static propTypes = {};

  state = {
    user: {
      username: "",
      password: ""
    }
  };

  onChangeText = e => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [e.target.name]: e.target.value }
    });
  };

  onSubmitForm = (value, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.setErrors({ password: "password not valid" });
      actions.setStatus({ password: "Set some arbitrary status or data" });
    }, 2000);
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <Formik
          initialValues={user}
          onSubmit={this.onSubmitForm}
          validationSchema={SignInSchema}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username && (
                  <div style={{ color: "red" }}>{errors.username}</div>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </div>
              <div>
                <input
                  type="submit"
                  value={isSubmitting ? "loading..." : "Submit"}
                />
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}
