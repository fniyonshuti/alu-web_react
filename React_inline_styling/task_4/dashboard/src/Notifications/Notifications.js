import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div
          className={css(styles.menuItem, displayDrawer && styles.hideMenuItem)}
        >
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <button
                  style={{
                    float: "right",
                    marginTop: "-70px",
                    backgroundColor: "#fff",
                    border: "none",
                  }}
                  aria-label="Close"
                >
                  <img src={closeIcon} alt="close" />
                </button>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" },
};

const styles = StyleSheet.create({
  menuItem: {
    position: "fixed",
    right: 0,
    top: 0,
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ":hover": {
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },
  hideMenuItem: {
    display: "none",
  },
});

export default Notifications;
