import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Courses } from "../courses";
import Loading from "../../../components/Loading/loading";
import CourseList from "../courseList";

configure({ adapter: new Adapter() });

function setup(loading = false, courses = [], error = false) {
  const props = {
    coursesData: {
      loading: loading,
      courses: courses,
      error: error
    },
    actions: {
      loadCourses: () => {}
    }
  };
  return shallow(
    <Courses coursesData={props.coursesData} actions={props.actions} />
  );
}

describe("courses", () => {
  it("render component", () => {
    const wrapper = setup();
    expect(wrapper.find("h1").text()).toMatch("Courses");
    expect(wrapper.find(CourseList).props()).toEqual({ courses: [] });
  });

  it("check couselist props", () => {
    const wrapper = setup(false, [
      {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref:
          "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:08",
        category: "JavaScript"
      }
    ]);

    expect(wrapper.find(CourseList).props()).toEqual({
      courses: [
        {
          id: "react-flux-building-applications",
          title: "Building Applications in React and Flux",
          watchHref:
            "http://www.pluralsight.com/courses/react-flux-building-applications",
          authorId: "cory-house",
          length: "5:08",
          category: "JavaScript"
        }
      ]
    });
  });

  it("render loading component", () => {
    const wrapper = setup(true);
    expect(wrapper.contains(<Loading />)).toBe(true);
  });

  it("render loading component", () => {
    const wrapper = setup(false, [], true);
    expect(wrapper.find("h2").text()).toMatch("Oops! something went wrong");
  });
});
