// MailContact.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MailContact from "./MailContact";
import { Linking } from "react-native";

// Mock for MaterialIcons from @expo/vector-icons
jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    MaterialIcons: (props: any) => <Text {...props}>{props.name}</Text>,
  };
});

describe("MailContact", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the email contact button correctly", () => {
    const email = "test@example.com";
    const { getByText } = render(<MailContact email={email} />);
    // Verify that the text "Email" is rendered
    expect(getByText("Email")).toBeTruthy();
  });

  it("calls Linking.openURL with the correct mailto URL when pressed", () => {
    const email = "test@example.com";
    const openURLSpy = jest
      .spyOn(Linking, "openURL")
      .mockImplementation(() => Promise.resolve(true));

    const { getByTestId } = render(<MailContact email={email} />);
    const touchable = getByTestId("mail-contact");
    fireEvent.press(touchable);
    expect(openURLSpy).toHaveBeenCalledWith(`mailto:${email}`);
  });
});
