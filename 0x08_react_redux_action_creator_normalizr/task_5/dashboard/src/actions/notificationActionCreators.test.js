import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("notificationActionCreators", () => {
  it("markAsAread should return correct action", () => {
    const result = markAsAread(1);
    expect(result).toEqual({
      type: MARK_AS_READ,
      index: 1,
    });
  });

  it("setNotificationFilter should return correct action", () => {
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(result).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
