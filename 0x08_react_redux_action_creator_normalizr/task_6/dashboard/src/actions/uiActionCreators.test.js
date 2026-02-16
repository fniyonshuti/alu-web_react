import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

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
});
