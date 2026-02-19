import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders NotificationItem elements", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it("first NotificationItem renders correct html", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop("type")).toBe("default");
    expect(firstItem.prop("value")).toBe("New course available");
  });

  describe("when displayDrawer is false", () => {
    it("displays menu item", () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find(".menuItem").length).toBe(1);
    });

    it("does not display div.Notifications", () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find(".Notifications").length).toBe(0);
    });
  });

  describe("when displayDrawer is true", () => {
    it("displays menu item", () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find(".menuItem").length).toBe(1);
    });

    it("displays div.Notifications", () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find(".Notifications").length).toBe(1);
    });
  });
});
