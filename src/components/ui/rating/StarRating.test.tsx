import React from "react";
import { render, screen } from "@testing-library/react-native";
import StarRating from "./StarRating";

jest.mock("@expo/vector-icons", () => {
    const React = require("react");

    return {
        MaterialCommunityIcons: ({ name, testID }: { name: string; testID?: string }) =>
            React.createElement("View", { testID: testID || name }),
    };
});

describe("StarRating Component", () => {
    test("renders the correct number of filled and empty stars", () => {
        const { getAllByTestId } = render(<StarRating stars={3} />);

        expect(getAllByTestId(/^star-filled-/)).toHaveLength(3);
        expect(getAllByTestId(/^star-empty-/)).toHaveLength(2);
    });
});
