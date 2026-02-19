import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("NotificationItem component", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it("renders correct html with type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
    expect(wrapper.find("li").text()).toBe("test");
  });

  it("renders correct html with html prop", () => {
    const wrapper = shallow(
      <NotificationItem type="default" html={{ __html: "<u>test</u>" }} />,
    );
    expect(wrapper.find("li").html()).toContain("<u>test</u>");
  });
});
