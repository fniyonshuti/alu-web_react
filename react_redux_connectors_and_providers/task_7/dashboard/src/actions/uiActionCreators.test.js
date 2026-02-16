import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("uiActionCreators tests", () => {
  it("login action creator returns correct object", () => {
    const email = "test@test.com";
    const password = "password";
    const expected = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expected);
  });

  it("logout action creator returns correct object", () => {
    const expected = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expected);
  });

  it("displayNotificationDrawer action creator returns correct object", () => {
    const expected = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expected);
  });

  it("hideNotificationDrawer action creator returns correct object", () => {
    const expected = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expected);
  });

  it("loginSuccess action creator returns correct object", () => {
    const expected = {
      type: LOGIN_SUCCESS,
    };
    expect(loginSuccess()).toEqual(expected);
  });

  it("loginFailure action creator returns correct object", () => {
    const expected = {
      type: LOGIN_FAILURE,
    };
    expect(loginFailure()).toEqual(expected);
  });

  describe("loginRequest async action", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("dispatches login and loginSuccess when API call succeeds", () => {
      fetchMock.getOnce("/dist/login-success.json", {
        body: {
          user_email: "test@test.com",
          user_firstname: "John",
          user_lastname: "Doe",
        },
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: LOGIN, user: { email: "test@test.com", password: "password" } },
        { type: LOGIN_SUCCESS },
      ];

      const store = mockStore({ user: {} });

      return store
        .dispatch(loginRequest("test@test.com", "password"))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("dispatches login and loginFailure when API call fails", () => {
      fetchMock.getOnce("/dist/login-success.json", {
        throws: new Error("API Error"),
      });

      const expectedActions = [
        { type: LOGIN, user: { email: "test@test.com", password: "password" } },
        { type: LOGIN_FAILURE },
      ];

      const store = mockStore({ user: {} });

      return store
        .dispatch(loginRequest("test@test.com", "password"))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
