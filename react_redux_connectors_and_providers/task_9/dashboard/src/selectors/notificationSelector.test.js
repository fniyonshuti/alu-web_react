import { Map, fromJS } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("notificationSelector", () => {
  it("filterTypeSelected returns the value of the filter", () => {
    const state = {
      notifications: Map({
        filter: "DEFAULT",
        notifications: {},
      }),
    };

    expect(filterTypeSelected(state)).toEqual("DEFAULT");
  });

  it("getNotifications returns a list of the message entities within the reducer", () => {
    const state = {
      notifications: Map({
        filter: "DEFAULT",
        notifications: fromJS({
          1: {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available",
          },
          2: {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available",
          },
          3: {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available",
          },
        }),
      }),
    };

    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      1: {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      2: {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available",
      },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" },
    });
  });

  it("getUnreadNotifications returns a list of unread message entities within the reducer", () => {
    const state = {
      notifications: Map({
        filter: "DEFAULT",
        notifications: fromJS({
          1: {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available",
          },
          2: {
            id: 2,
            isRead: true,
            type: "urgent",
            value: "New resume available",
          },
          3: {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available",
          },
        }),
      }),
    };

    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      1: {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" },
    });
  });
});
