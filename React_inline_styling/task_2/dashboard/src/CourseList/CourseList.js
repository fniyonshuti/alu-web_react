import React from "react";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  courseList: {
    border: "1px solid #ddd",
    width: "100%",
    borderCollapse: "collapse",
  },
});

function CourseList() {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
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

export default CourseList;
