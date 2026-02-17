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
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });

    const expected = {
      isLoggedIn: true,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps returns the right object when isUserLoggedIn is false", () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });

    const expected = {
      isLoggedIn: false,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
