import React from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <div className={css(styles.footer)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTop: "3px solid #e01d3f",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: "0",
    fontStyle: "italic",
  },
});

export default Footer;
