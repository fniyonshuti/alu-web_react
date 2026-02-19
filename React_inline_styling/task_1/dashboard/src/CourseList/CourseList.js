import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";

function CourseList() {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          textSecondCell="60"
        />
        <CourseListRow
          isHeader={false}
          textFirstCell="Webpack"
          textSecondCell="20"
        />
        <CourseListRow
          isHeader={false}
          textFirstCell="React"
          textSecondCell="40"
        />
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    border: "1px solid #ddd",
    width: "100%",
    borderCollapse: "collapse",
  },
});

export default CourseList;
