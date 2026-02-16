import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const fetchNotificationsSuccess = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    return fetch("/dist/notifications.json")
      .then((response) => response.json())
      .then((data) => dispatch(fetchNotificationsSuccess(data)))
      .catch((error) => console.error("Error fetching notifications:", error));
  };
};
