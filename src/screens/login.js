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

  onSubmitForm = data => {
    alert(JSON.stringify(data));
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
            errors
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && <div>{errors.username}</div>}
              <input
                type="password"
                name="password"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && <div>{errors.password}</div>}
              <input type="submit" value="submit" />
            </form>
          )}
        />
      </div>
    );
  }
}
