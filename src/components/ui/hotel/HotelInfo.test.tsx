// HotelInfo.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import HotelInfo from "./HotelInfo";

// Mock for UserRating component
jest.mock("../rating/UserRating", () => {
  const React = require("react");
  const { Text } = require("react-native");

  const MockUserRating = (props: any) => (
    <Text testID="user-rating">
      {`UserRating: ${props.stars} stars, ${props.rating} rating`}
    </Text>
  );

  MockUserRating.displayName = "MockUserRating";

  return MockUserRating;
});

// Mock for HotelPrice component
jest.mock("./HotelPrice", () => {
  const React = require("react");
  const { Text } = require("react-native");

  const MockHotelPrice = (props: any) => (
    <Text testID="hotel-price">
      {`HotelPrice: ${props.price} ${props.currency}`}
    </Text>
  );

  MockHotelPrice.displayName = "MockHotelPrice";

  return MockHotelPrice;
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
