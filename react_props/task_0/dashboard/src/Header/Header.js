import React from "react";
import "./Header.css";
import holberton_logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <div className="App-header">
      <img src={holberton_logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
