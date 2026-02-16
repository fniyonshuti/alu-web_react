import React from "react";
import { render } from "@testing-library/react";
import { fromJS } from "immutable";
import { NotificationsWithoutConnect, mapStateToProps } from "./Notifications";

describe("Notifications component tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<NotificationsWithoutConnect />);
    expect(container).toBeTruthy();
  });

  it("calls fetchNotifications on mount", () => {
    const fetchNotificationsMock = jest.fn();
    render(<NotificationsWithoutConnect fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it("mapStateToProps returns correct list of notifications", () => {
    const state = {
      notifications: fromJS({
        notifications: {
          "1": { id: 1, type: "default", value: "New course available", isRead: false },
          "2": { id: 2, type: "urgent", value: "New resume available", isRead: false },
        },
        filter: "DEFAULT",
      }),
    };

    const result = mapStateToProps(state);
    expect(result.listNotifications).toHaveLength(2);
    expect(result.listNotifications[0].value).toContain("New course available");
  });

  it("mapStateToProps returns empty array when no notifications", () => {
    const state = {
      notifications: fromJS({
        notifications: {},
        filter: "DEFAULT",
      }),
    };

    const result = mapStateToProps(state);
    expect(result.listNotifications).toEqual([]);
  });
});
