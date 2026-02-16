import { Map, fromJS } from "immutable";
import { getCourses } from "./courseSelector";

describe("courseSelector tests", () => {
  it("getCourses returns the courses from state", () => {
    const state = {
      courses: Map({
        courses: fromJS({
          1: { id: 1, name: "ES6", credit: 60, isSelected: false },
          2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
          3: { id: 3, name: "React", credit: 40, isSelected: false },
        }),
      }),
    };

    const courses = getCourses(state);
    expect(courses.toJS()).toEqual({
      1: { id: 1, name: "ES6", credit: 60, isSelected: false },
      2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
      3: { id: 3, name: "React", credit: 40, isSelected: false },
    });
  });

  it("getCourses returns empty object when courses is null", () => {
    const state = {
      courses: Map({}),
    };

    const courses = getCourses(state);
    expect(courses).toEqual({});
  });
});
