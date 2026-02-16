import { createSelector } from "reselect";

const getCoursesState = (state) => state.courses.get("courses");

export const getCourses = createSelector([getCoursesState], (courses) =>
  courses ? courses : {},
);
