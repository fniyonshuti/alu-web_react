import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import AppContext, { defaultUser } from "../App/AppContext";

describe("Header component tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("logoutSection is not created with default context value", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>,
    );
    expect(wrapper.find("#logoutSection").length).toBe(0);
    wrapper.unmount();
  });

  it("logoutSection is created when user is logged in", () => {
    const user = {
      email: "test@example.com",
      password: "password123",
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>,
    );
    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").text()).toContain("test@example.com");
    wrapper.unmount();
  });

  it("clicking on logout link calls the logOut spy", () => {
    const logOutSpy = jest.fn();
    const user = {
      email: "test@example.com",
      password: "password123",
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>,
    );
    wrapper.find("#logoutSection a").simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
    wrapper.unmount();
  });
});
