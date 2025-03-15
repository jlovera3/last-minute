// HotelPrice.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import HotelPrice from "./HotelPrice";
import { getCurrencySymbol } from "@/src/utils/currencyUtils";

// Mock getCurrencySymbol to control its output during the test
jest.mock("@/src/utils/currencyUtils", () => ({
    getCurrencySymbol: jest.fn(),
}));

describe("HotelPrice", () => {
    it("renders the price with currency symbol", () => {
        // Set the mock return value for getCurrencySymbol
        (getCurrencySymbol as jest.Mock).mockReturnValue("$");
        const price = 150;
        const currency = "USD";

        const { getByText } = render(
            <HotelPrice price={price} currency={currency} />
        );

        // Verify that the rendered text contains "150$ per night"
        expect(getByText("150$ per night")).toBeTruthy();
    });
});
