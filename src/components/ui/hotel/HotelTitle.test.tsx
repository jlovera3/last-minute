// HotelTitle.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import HotelTitle from "./HotelTitle";

describe("HotelTitle", () => {
  it("renders the title correctly", () => {
    const title = "Test Hotel";
    const { getByText } = render(<HotelTitle title={title} />);
    // Check that the title is rendered in the Text component
    expect(getByText(title)).toBeTruthy();
  });
});
