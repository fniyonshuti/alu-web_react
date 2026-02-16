import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  markAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
  fetchNotifications,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from "./notificationActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("notificationActionCreators tests", () => {
  it("markAsRead action creator returns correct object", () => {
    const index = 1;
    const expected = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(markAsRead(index)).toEqual(expected);
  });

  it("setNotificationFilter action creator returns correct object", () => {
    const filter = NotificationTypeFilters.URGENT;
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    expect(setNotificationFilter(filter)).toEqual(expected);
  });

  it("fetchNotificationsSuccess action creator returns correct object", () => {
    const data = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const expected = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    expect(fetchNotificationsSuccess(data)).toEqual(expected);
  });

  describe("fetchNotifications async action", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("dispatches FETCH_NOTIFICATIONS_SUCCESS when API call succeeds", () => {
      const mockData = [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
      ];

      fetchMock.getOnce("/dist/notifications.json", {
        body: mockData,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        {
          type: FETCH_NOTIFICATIONS_SUCCESS,
          data: mockData,
        },
      ];

      const store = mockStore({});

      return store.dispatch(fetchNotifications()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
