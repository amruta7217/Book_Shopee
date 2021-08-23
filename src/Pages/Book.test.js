import React from "react";
import Books from "./Books";
import renderer from "react-test-renderer";

test('first snapshot test',() => {
    const component = renderer.create(
      <Books/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })