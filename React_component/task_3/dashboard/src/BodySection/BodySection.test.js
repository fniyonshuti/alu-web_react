import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection component", () => {
  it("renders correctly with children and h2 element", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>,
    );

    // Check that there is one h2 element with correct text
    expect(wrapper.find("h2").length).toBe(1);
    expect(wrapper.find("h2").text()).toBe("test title");

    // Check that there is one p element with correct text
    expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").text()).toBe("test children node");
  });
});
