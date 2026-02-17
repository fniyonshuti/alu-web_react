import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of NotificationItem components", () => {
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
    expect(wrapper.find("NotificationItem").length).toBe(2);
  });

  it("calls markNotificationAsRead with the right id when NotificationItem is clicked", () => {
    const markNotificationAsRead = jest.fn();
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />,
    );

    const firstNotification = wrapper.find("NotificationItem").first();
    firstNotification.prop("markAsRead")(1);
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
