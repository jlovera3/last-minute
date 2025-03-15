// HotelInfo.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import HotelInfo from "./hotelInfo";

// Mock for UserRating component
jest.mock("../rating/UserRating", () => {
    const React = require("react");
    const { Text } = require("react-native");
    return (props: any) => (
        <Text testID="user-rating">
            {`UserRating: ${props.stars} stars, ${props.rating} rating`}
        </Text>
    );
});

// Mock for HotelPrice component
jest.mock("./HotelPrice", () => {
    const React = require("react");
    const { Text } = require("react-native");
    return (props: any) => (
        <Text testID="hotel-price">
            {`HotelPrice: ${props.price} ${props.currency}`}
        </Text>
    );
});

describe("HotelInfo", () => {
    it("renders hotel title, user rating and hotel price correctly", () => {
        const props = {
            title: "Test Hotel",
            stars: 4,
            rating: 8.5,
            price: 120,
            currency: "USD",
        };

        const { getByText } = render(<HotelInfo {...props} />);

        // Verify that the title is rendered correctly
        expect(getByText(props.title)).toBeTruthy();

        // Verify that the mocked UserRating is rendered with the expected text
        expect(
            getByText(`UserRating: ${props.stars} stars, ${props.rating} rating`)
        ).toBeTruthy();

        // Verify that the mocked HotelPrice is rendered with the expected text
        expect(
            getByText(`HotelPrice: ${props.price} ${props.currency}`)
        ).toBeTruthy();
    });
});
