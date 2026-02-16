export const filterTypeSelected = (state) => {
  return state.notifications.get("filter");
};

export const getNotifications = (state) => {
  return state.notifications.get("notifications");
};

export const getUnreadNotifications = (state) => {
  const notifications = getNotifications(state);
  if (!notifications) {
    return notifications;
  }

  return notifications.filter(
    (notification) => notification.get("isRead") === false,
  );
};
