import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer({ user }) {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && (
        <p>
          <a href="/contact">Contact</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: null,
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get("user").toJS(),
  };
};

export { Footer as FooterWithoutConnect };
export default connect(mapStateToProps)(Footer);
