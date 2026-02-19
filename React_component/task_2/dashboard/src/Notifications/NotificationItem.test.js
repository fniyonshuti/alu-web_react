import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

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

  it("calls markAsRead with the right ID argument when clicked", () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(
      <NotificationItem
        type="default"
        value="test"
        id={1}
        markAsRead={markAsReadSpy}
      />,
    );

    wrapper.find("li").simulate("click");

    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
