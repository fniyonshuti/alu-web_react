import React from "react";
import { mount } from "enzyme";
import Footer from "./Footer";
import AppContext, { defaultUser } from "../App/AppContext";

describe("Footer component tests", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>,
    );
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  it("Contact us link is not displayed when user is logged out", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>,
    );
    expect(wrapper.text()).toContain("Copyright");
    expect(wrapper.text()).not.toContain("Contact us");
    wrapper.unmount();
  });

  it("Contact us link is displayed when user is logged in", () => {
    const user = {
      email: "test@example.com",
      password: "password123",
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>,
    );
    expect(wrapper.text()).toContain("Contact us");
    wrapper.unmount();
  });
});
