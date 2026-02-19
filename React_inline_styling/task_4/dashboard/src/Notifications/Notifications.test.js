import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  describe("with listNotifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    it("renders NotificationItem elements", () => {
      const wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />,
      );
      expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it("first NotificationItem renders correct html", () => {
      const wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />,
      );
      const firstItem = wrapper.find(NotificationItem).first();
      expect(firstItem.prop("type")).toBe("default");
      expect(firstItem.prop("value")).toBe("New course available");
    });

    it("renders correctly when passing a list of notifications", () => {
      const wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />,
      );
      expect(wrapper.find(NotificationItem).length).toBe(3);
      expect(wrapper.find("p").first().text()).toBe(
        "Here is the list of notifications",
      );
    });
  });

  describe("with empty listNotifications", () => {
    it("renders correctly if listNotifications is empty", () => {
      const wrapper = shallow(
        <Notifications displayDrawer={true} listNotifications={[]} />,
      );
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.find("p").text()).toBe("No new notification for now");
    });

    it("renders correctly if listNotifications is not provided", () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.find("p").text()).toBe("No new notification for now");
    });
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

  describe("shouldComponentUpdate", () => {
    it("does not rerender when updating with the same list", () => {
      const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ];

      const wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />,
      );

      const shouldUpdate = wrapper.instance().shouldComponentUpdate({
        displayDrawer: true,
        listNotifications: listNotifications,
      });

      expect(shouldUpdate).toBe(false);
    });

    it("does rerender when updating with a longer list", () => {
      const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ];

      const wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />,
      );

      const longerList = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ];

      const shouldUpdate = wrapper.instance().shouldComponentUpdate({
        displayDrawer: true,
        listNotifications: longerList,
      });

      expect(shouldUpdate).toBe(true);
    });
  });
});
