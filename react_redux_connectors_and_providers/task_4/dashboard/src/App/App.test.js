import React from "react";
import { render } from "@testing-library/react";
import { fromJS } from "immutable";
import { AppWithoutConnect, mapStateToProps } from "./App";

describe("App component tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<AppWithoutConnect />);
    expect(container).toBeTruthy();
  });

  it("mapStateToProps returns the right object when isUserLoggedIn is true", () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };

    const expected = {
      isLoggedIn: true,
      displayDrawer: false,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps returns the right object when isUserLoggedIn is false", () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: false,
        isNotificationDrawerVisible: true,
      }),
    };

    const expected = {
      isLoggedIn: false,
      displayDrawer: true,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
