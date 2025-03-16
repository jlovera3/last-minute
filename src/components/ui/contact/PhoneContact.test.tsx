import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PhoneContact from "./PhoneContact";
import { Linking } from "react-native";

// Mock for MaterialIcons from @expo/vector-icons
jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    MaterialIcons: (props: any) => <Text {...props}>{props.name}</Text>,
  };
});

describe("PhoneContact", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the phone contact button correctly", () => {
    const phoneNumber = "1234567890";
    const { getByText } = render(<PhoneContact phoneNumber={phoneNumber} />);
    // Verify that the text "Phone" is rendered
    expect(getByText("Phone")).toBeTruthy();
  });

  it("calls Linking.openURL with the correct tel URL when pressed", () => {
    const phoneNumber = "1234567890";
    const openURLSpy = jest
      .spyOn(Linking, "openURL")
      .mockImplementation(() => Promise.resolve(true));

    const { getByTestId } = render(<PhoneContact phoneNumber={phoneNumber} />);
    const touchable = getByTestId("phone-contact");
    fireEvent.press(touchable);
    expect(openURLSpy).toHaveBeenCalledWith(`tel:${phoneNumber}`);
  });
});
