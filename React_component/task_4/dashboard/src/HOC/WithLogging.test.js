import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("WithLogging HOC", () => {
  it("logs on mount and unmount with Component when wrapped element is pure html", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith("Component Component is mounted");

    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Component is going to unmount",
    );

    consoleSpy.mockRestore();
  });

  it("logs on mount and unmount with the component name when wrapped element is Login", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");

    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Login is going to unmount",
    );

    consoleSpy.mockRestore();
  });
});
