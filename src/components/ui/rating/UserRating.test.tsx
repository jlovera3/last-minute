import React from "react";
import { render, screen } from "@testing-library/react-native";
import UserRating from "./UserRating";

// ⚠️ IMPORTANTE: Importamos React y View DENTRO del mock
jest.mock("@/src/components/ui/rating/StarRating", () => {
    const React = require("react");
    const { View, Text } = require("react-native");

    return function MockStarRating({ stars }: { stars: number }) {
        return (
            <View testID="mock-star-rating">
                <Text>Stars: {stars}</Text>
            </View>
        );
    };
});

describe("UserRating Component", () => {
    test("renders the correct star rating and user rating", () => {
        const stars = 4;
        const rating = 8.5;

        render(<UserRating stars={stars} rating={rating} />);

        expect(screen.getByTestId("mock-star-rating")).toHaveTextContent(`Stars: ${stars}`);
        expect(screen.getByText(`${rating}/10`)).toBeTruthy();
    });
});
