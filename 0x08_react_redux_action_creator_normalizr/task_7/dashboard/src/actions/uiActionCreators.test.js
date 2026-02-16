import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("uiActionCreators", () => {
  it("login should return correct action", () => {
    const email = "test@test.com";
    const password = "password123";
    const result = login(email, password);
    expect(result).toEqual({
      type: LOGIN,
      user: { email, password },
    });
  });

  it("logout should return correct action", () => {
    const result = logout();
    expect(result).toEqual({ type: LOGOUT });
  });

  it("displayNotificationDrawer should return correct action", () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it("hideNotificationDrawer should return correct action", () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });

  it("loginSuccess should return correct action", () => {
    const result = loginSuccess();
    expect(result).toEqual({ type: LOGIN_SUCCESS });
  });

  it("loginFailure should return correct action", () => {
    const result = loginFailure();
    expect(result).toEqual({ type: LOGIN_FAILURE });
  });
});

describe("loginRequest async action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("loginRequest dispatches LOGIN and LOGIN_SUCCESS on successful API call", () => {
    fetchMock.getOnce("/dist/login-success.json", {
      body: {
        user_email: "test@test.com",
        user_firstname: "John",
        user_lastname: "Doe",
      },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: "test@test.com", password: "123456" } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest("test@test.com", "123456")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("loginRequest dispatches LOGIN and LOGIN_FAILURE when API call fails", () => {
    fetchMock.getOnce("/dist/login-success.json", 500);

    const expectedActions = [
      { type: LOGIN, user: { email: "test@test.com", password: "123456" } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest("test@test.com", "123456")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
