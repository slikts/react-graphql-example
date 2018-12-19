import { mount } from "enzyme";
import React from "react";
import Button from "../components/Button";
import Error from "../components/Error";

describe("Error", () => {
  it("constructs and calls back on dismiss", () => {
    const fn = jest.fn();
    const wrapper = mount(
      <Error message="Foo" onDismiss={fn} dismissLabel="Bar" />
    );
    wrapper.find(Button).simulate("click");
    expect(fn).toHaveBeenCalled();
  });
});
