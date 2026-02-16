import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import {
  fetchNotifications,
  markAsRead,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { getUnreadNotifications } from "../selectors/notificationSelector";
import "./Notifications.css";

class Notifications extends React.Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      listNotifications,
      markNotificationAsRead,
      setNotificationFilter,
    } = this.props;

    const notificationList = listNotifications || [];

    return (
      <>
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              x
            </button>
            <p>Here is the list of notifications</p>
            <button onClick={() => setNotificationFilter(NotificationTypeFilters.URGENT)}>
              ‼️
            </button>
            <ul>
              {notificationList.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : (
                notificationList.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => markNotificationAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.array,
  fetchNotifications: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
  fetchNotifications: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {},
};

export const mapStateToProps = (state) => {
  const notifications = getUnreadNotifications(state);
  const notificationList = notifications && notifications.toJS ? 
    Object.values(notifications.toJS()) : [];
  
  return {
    listNotifications: notificationList,
  };
};

export const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsRead,
  setNotificationFilter,
};

export { Notifications as NotificationsWithoutConnect };
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

