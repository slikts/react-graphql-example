import { mount } from "enzyme";
import React from "react";
import Button from "../components/Button";
import ClientApp from "../components/ClientApp";

describe("smoke test", () => {
  beforeEach(() => {
    (fetch as any).resetMocks();
  });

  it("renders", () => {
    const wrapper = mount(<ClientApp />);
    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(1);
  });
});
