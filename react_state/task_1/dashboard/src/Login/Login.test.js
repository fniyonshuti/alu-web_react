import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login component tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(true);
  });

  it("button is enabled after changing the value of the two inputs", () => {
    const wrapper = shallow(<Login />);

    // Simulate changing email input
    wrapper.find("#email").simulate("change", {
      target: { value: "test@example.com" },
    });

    // Simulate changing password input
    wrapper.find("#password").simulate("change", {
      target: { value: "password123" },
    });

    // Update wrapper to reflect state changes
    wrapper.update();

    // Check if submit button is now enabled
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(false);
  });

  it("form submission calls logIn with email and password", () => {
    const logInSpy = jest.fn();
    const wrapper = shallow(<Login logIn={logInSpy} />);

    wrapper.find("#email").simulate("change", {
      target: { value: "test@example.com" },
    });

    wrapper.find("#password").simulate("change", {
      target: { value: "password123" },
    });

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(logInSpy).toHaveBeenCalledWith("test@example.com", "password123");
  });
});
