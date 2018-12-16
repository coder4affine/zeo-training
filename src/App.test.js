import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./components/Header/header";
import App from "./App";
configure({ adapter: new Adapter() });

describe("snapshot", () => {
  it("snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<h1>Zeolearn APP</h1>)).toEqual(true);
  expect(wrapper.contains(<Header />)).toEqual(true);
});
