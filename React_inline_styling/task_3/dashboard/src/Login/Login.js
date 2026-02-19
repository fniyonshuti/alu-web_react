import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  loginParagraph: {
    marginBottom: "15px",
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  label: {
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  input: {
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  button: {
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
});

function Login() {
  return (
    <>
      <p className={css(styles.loginParagraph)}>
        Login to access the full dashboard
      </p>
      <div className={css(styles.formContainer)}>
        <label htmlFor="email" className={css(styles.label)}>
          Email:{" "}
        </label>
        <input type="email" id="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>
          {" "}
          Password:{" "}
        </label>
        <input type="password" id="password" className={css(styles.input)} />
        <button className={css(styles.button)}>OK</button>
      </div>
    </>
  );
}

export default Login;
