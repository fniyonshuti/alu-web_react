import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom component", () => {
  it("renders correctly a BodySection component and passes props correctly", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>,
    );

    // Check that it renders one BodySection component
    expect(wrapper.find(BodySection).length).toBe(1);

    // Check that the BodySection component receives the correct props
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.prop("title")).toBe("test title");
    expect(bodySection.children().text()).toBe("test children node");
  });
});
