import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value, id, markAsRead }) {
  const handleClick = () => {
    markAsRead(id);
  };

  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      ></li>
    );
  }
  return (
    <li data-notification-type={type} onClick={handleClick}>
      {value}
    </li>
  );
}

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
