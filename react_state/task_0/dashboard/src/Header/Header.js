import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { user, logout } = this.props;

    return (
      <header className="App-header">
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        {user && (
          <section id="logoutSection">
            Welcome <strong>{user.email}</strong>
            <a href="#" onClick={logout}>
              {" "}
              (logout)
            </a>
          </section>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

export default Header;
