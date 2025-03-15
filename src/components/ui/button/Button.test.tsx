import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./Button";

describe("Button Component", () => {
    test("renders the button with the correct title", () => {
        const { getByText } = render(<Button title="Click me" onPress={() => { }} />);
        expect(getByText("Click me")).toBeTruthy();
    });

    test("calls onPress when pressed", () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<Button title="Press me" onPress={onPressMock} />);
        fireEvent.press(getByText("Press me"));
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});
