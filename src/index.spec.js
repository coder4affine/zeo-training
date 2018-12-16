import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { sum } from "./utils";

describe("description test spec", () => {
  test("should test work", () => {
    expect(sum(1, 3)).toBe(4);
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
