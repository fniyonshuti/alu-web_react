import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { defaultUser } from "./AppContext";

describe("App component tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("default state has user set to defaultUser", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("user")).toEqual(defaultUser);
  });

  it("logIn function updates state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn("test@example.com", "password123");
    expect(wrapper.state("user")).toEqual({
      email: "test@example.com",
      password: "password123",
      isLoggedIn: true,
    });
  });

  it("logOut function updates state correctly", () => {
    const wrapper = shallow(<App />);
    // First log in
    wrapper.instance().logIn("test@example.com", "password123");
    expect(wrapper.state("user").isLoggedIn).toBe(true);

    // Then log out
    wrapper.instance().logOut();
    expect(wrapper.state("user")).toEqual(defaultUser);
  });
});
