import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
    "@media (max-width: 900px)": {
      width: "100%",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 8px",
    },
  },
  urgent: {
    color: "red",
    "@media (max-width: 900px)": {
      width: "100%",
      borderBottom: "1px solid black",
      fontSize: "20px",
      padding: "10px 8px",
    },
  },
});

const NotificationItem = React.memo(function NotificationItem({
  type,
  html,
  value,
  id,
  markAsRead,
}) {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };

  if (html) {
    return (
      <li
        className={css(type === "urgent" ? styles.urgent : styles.default)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      ></li>
    );
  }
  return (
    <li
      className={css(type === "urgent" ? styles.urgent : styles.default)}
      data-notification-type={type}
      onClick={handleClick}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};

export default NotificationItem;
