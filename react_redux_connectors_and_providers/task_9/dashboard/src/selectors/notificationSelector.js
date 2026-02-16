import { createSelector } from "reselect";

const getNotificationsState = (state) =>
  state.notifications.get("notifications");

export const filterTypeSelected = (state) => {
  return state.notifications.get("filter");
};

export const getNotifications = createSelector(
  [getNotificationsState],
  (notifications) => notifications,
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => {
    if (!notifications) {
      return notifications;
    }

    return notifications.filter(
      (notification) => notification.get("isRead") === false,
    );
  },
);
