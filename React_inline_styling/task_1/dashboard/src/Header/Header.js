import React from "react";
import { StyleSheet, css } from "aphrodite";
import holberton_logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holberton_logo} alt="logo" className={css(styles.logo)} />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e01d3f",
    fontSize: "20px",
    borderBottom: "3px solid #e01d3f",
  },
  logo: {
    width: "200px",
  },
});

export default Header;
