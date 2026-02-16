import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value } = this.props;

    if (html) {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      );
    }
    return <li data-notification-type={type}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
