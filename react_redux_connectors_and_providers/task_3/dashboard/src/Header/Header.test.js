import React from "react";
import { render, screen } from "@testing-library/react";
import { fromJS } from "immutable";
import { HeaderWithoutConnect, mapStateToProps } from "./Header";

describe("Header component tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<HeaderWithoutConnect />);
    expect(container).toBeTruthy();
  });

  it("does not render logout section when user is not logged in", () => {
    const { queryByText } = render(<HeaderWithoutConnect user={null} />);
    expect(queryByText("logout")).not.toBeInTheDocument();
  });

  it("renders logout section when user is logged in", () => {
    const user = { email: "test@test.com" };
    const { getByText } = render(<HeaderWithoutConnect user={user} />);
    expect(getByText("logout")).toBeInTheDocument();
    expect(getByText("test@test.com")).toBeInTheDocument();
  });

  it("mapStateToProps returns the right object with user", () => {
    const state = fromJS({
      user: { email: "test@test.com", firstName: "John", lastName: "Doe" },
    });

    const expected = {
      user: { email: "test@test.com", firstName: "John", lastName: "Doe" },
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps returns the right object with empty user", () => {
    const state = fromJS({
      user: {},
    });

    const expected = {
      user: {},
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });
});
