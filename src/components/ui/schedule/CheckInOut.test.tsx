import React from "react";
import { render } from "@testing-library/react-native";
import CheckInOut from "./CheckInOut";
import { CheckTime } from "@/src/interfaces/hotel";

describe("CheckInOut Component", () => {
  const mockCheckIn: CheckTime = { from: "14:00", to: "20:00" };
  const mockCheckOut: CheckTime = { from: "07:00", to: "10:00" };

  test("renders check-in and check-out times correctly", () => {
    const { getByText } = render(
      <CheckInOut checkIn={mockCheckIn} checkOut={mockCheckOut} />
    );

    expect(getByText("Check-in:")).toBeTruthy();
    expect(getByText("14:00 - 20:00")).toBeTruthy();
    expect(getByText("Check-out:")).toBeTruthy();
    expect(getByText("07:00 - 10:00")).toBeTruthy();
  });
});
