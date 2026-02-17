import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.displayDrawer !== this.props.displayDrawer ||
      nextProps.handleDisplayDrawer !== this.props.handleDisplayDrawer ||
      nextProps.handleHideDrawer !== this.props.handleHideDrawer
    );
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

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
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                html={{
                  __html:
                    "<strong>Urgent requirement</strong> - complete by EOD",
                }}
              />
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
