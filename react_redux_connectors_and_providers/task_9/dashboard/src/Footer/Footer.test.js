import React from "react";
import { render } from "@testing-library/react";
import { fromJS } from "immutable";
import { FooterWithoutConnect, mapStateToProps } from "./Footer";

describe("Footer component tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<FooterWithoutConnect />);
    expect(container).toBeTruthy();
  });

  it("does not display contact link when user is not logged in", () => {
    const { queryByText } = render(<FooterWithoutConnect user={null} />);
    expect(queryByText("Contact")).not.toBeInTheDocument();
  });

  it("displays contact link when user is logged in", () => {
    const user = { email: "test@test.com" };
    const { getByText } = render(<FooterWithoutConnect user={user} />);
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("mapStateToProps returns the right object with user", () => {
    const state = {
      ui: fromJS({
        user: { email: "test@test.com", firstName: "John", lastName: "Doe" },
      }),
    };

    const expected = {
      user: { email: "test@test.com", firstName: "John", lastName: "Doe" },
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps returns the right object with empty user", () => {
    const state = {
      ui: fromJS({
        user: {},
      }),
    };

    const expected = {
      user: {},
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
