import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it("does not display CourseList when logged out", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe("when isLoggedIn is true", () => {
    it("does not include Login component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).length).toBe(0);
    });

    it("includes CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe("logOut function and keyboard events", () => {
    it("calls logOut and shows alert when control and h keys are pressed", () => {
      const logOutMock = jest.fn();
      const alertMock = jest
        .spyOn(window, "alert")
        .mockImplementation(() => {});

      const wrapper = shallow(<App logOut={logOutMock} />);
      const instance = wrapper.instance();

      const event = new KeyboardEvent("keydown", {
        ctrlKey: true,
        key: "h",
      });

      instance.handleKeyDown(event);

      expect(alertMock).toHaveBeenCalledWith("Logging you out");
      expect(logOutMock).toHaveBeenCalled();

      alertMock.mockRestore();
    });
  });
});
