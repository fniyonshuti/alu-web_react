import { Map } from "immutable";
import rootReducer from "./rootReducer";
import { DISPLAY_NOTIFICATION_DRAWER, LOGOUT } from "../actions/uiActionTypes";
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

describe("rootReducer tests", () => {
  it("returns the initial state for all reducers", () => {
    const state = rootReducer(undefined, {});
    
    expect(state.courses).toEqual(Map());
    expect(state.notifications.toJS()).toEqual({
      notifications: {},
      filter: "DEFAULT"
    });
    expect(state.ui.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it("correctly updates ui state when DISPLAY_NOTIFICATION_DRAWER is dispatched", () => {
    const state = rootReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    
    expect(state.ui.get("isNotificationDrawerVisible")).toBe(true);
  });

  it("correctly updates all reducers independently", () => {
    let state = rootReducer(undefined, {});
    
    state = rootReducer(state, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.ui.get("isNotificationDrawerVisible")).toBe(true);
    
    state = rootReducer(state, { type: LOGOUT });
    expect(state.ui.get("isUserLoggedIn")).toBe(false);
    expect(state.ui.get("user").toJS()).toEqual({});
  });
});
