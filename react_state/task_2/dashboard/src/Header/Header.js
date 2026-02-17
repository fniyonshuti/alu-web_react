import React from "react";
import AppContext from "../App/AppContext";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;

    return (
      <header className="App-header">
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome <strong>{user.email}</strong>{" "}
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </section>
        )}
      </header>
    );
  }
}

Header.contextType = AppContext;

export default Header;
