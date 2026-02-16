export const getCourses = (state) => {
  const courses = state.courses.get("courses");
  return courses ? courses : {};
};
