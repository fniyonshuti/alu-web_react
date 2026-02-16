import { Map } from "immutable";
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

describe("uiReducer tests", () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it("returns the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("returns the initial state when unknown action is passed", () => {
    const state = uiReducer(undefined, { type: "UNKNOWN_ACTION" });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("correctly sets isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("correctly sets isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed", () => {
    const state = uiReducer(
      Map({
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: Map({}),
      }),
      { type: HIDE_NOTIFICATION_DRAWER },
    );
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("correctly sets user when LOGIN action is passed", () => {
    const user = { email: "test@test.com", password: "password" };
    const state = uiReducer(undefined, { type: LOGIN, user });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: { email: "test@test.com", password: "password" },
    });
  });

  it("correctly sets isUserLoggedIn to true when LOGIN_SUCCESS is passed", () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    });
  });

  it("correctly sets isUserLoggedIn to false when LOGIN_FAILURE is passed", () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("correctly clears user and sets isUserLoggedIn to false when LOGOUT is passed", () => {
    const state = uiReducer(
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: true,
        user: Map({ email: "test@test.com", password: "password" }),
      }),
      { type: LOGOUT },
    );
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
