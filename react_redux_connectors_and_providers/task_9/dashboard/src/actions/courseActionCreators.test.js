import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
  fetchCourses,
} from "./courseActionCreators";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("courseActionCreators tests", () => {
  it("selectCourse action creator returns correct object", () => {
    const index = 1;
    const expected = {
      type: SELECT_COURSE,
      index: 1,
    };
    expect(selectCourse(index)).toEqual(expected);
  });

  it("unSelectCourse action creator returns correct object", () => {
    const index = 1;
    const expected = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    expect(unSelectCourse(index)).toEqual(expected);
  });

  it("fetchCourseSuccess action creator returns correct object", () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
    ];
    const expected = {
      type: FETCH_COURSE_SUCCESS,
      data,
    };
    expect(fetchCourseSuccess(data)).toEqual(expected);
  });

  describe("fetchCourses async action", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("dispatches FETCH_COURSE_SUCCESS when API call succeeds", () => {
      const mockData = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];

      fetchMock.getOnce("/dist/courses.json", {
        body: mockData,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        {
          type: FETCH_COURSE_SUCCESS,
          data: mockData,
        },
      ];

      const store = mockStore({});

      return store.dispatch(fetchCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
