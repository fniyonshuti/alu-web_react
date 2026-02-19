import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

StyleSheetTestUtils.suppressStyleInjection();

describe("CourseList component", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  describe("with listCourses", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    it("renders correct number of rows", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.find(CourseListRow).length).toBe(5); // 2 header rows + 3 course rows
    });

    it("renders correctly when passing a list of courses", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      const rows = wrapper.find(CourseListRow);
      expect(rows.length).toBe(5);
      expect(rows.at(2).prop("textFirstCell")).toBe("ES6");
      expect(rows.at(2).prop("textSecondCell")).toBe("60");
    });
  });

  describe("with empty listCourses", () => {
    it("renders correctly if listCourses is empty", () => {
      const wrapper = shallow(<CourseList listCourses={[]} />);
      const rows = wrapper.find(CourseListRow);
      expect(rows.length).toBe(3); // 2 header rows + 1 "No course available yet" row
      expect(rows.at(2).prop("textFirstCell")).toBe("No course available yet");
    });

    it("renders correctly if listCourses is not provided", () => {
      const wrapper = shallow(<CourseList />);
      const rows = wrapper.find(CourseListRow);
      expect(rows.length).toBe(3); // 2 header rows + 1 "No course available yet" row
      expect(rows.at(2).prop("textFirstCell")).toBe("No course available yet");
    });
  });
});
