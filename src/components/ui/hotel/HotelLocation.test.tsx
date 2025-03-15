// HotelLocation.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HotelLocation from "./HotelLocation";
import { Linking } from "react-native";

describe("HotelLocation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Image with the correct map image URL", () => {
    const latitude = 40.7128;
    const longitude = -74.0060;
    const address = "New York, NY";
    const city = "New York"; // propiedad requerida por Location
    const expectedMapImageUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=14&l=map&size=600,300`;

    const { toJSON } = render(
      <HotelLocation
        latitude={latitude}
        longitude={longitude}
        address={address}
        city={city}
      />
    );

    // Helper function to recursively find the Image node in the JSON tree
    function findImage(node: any): any | null {
      if (!node) return null;
      if (node.type === "Image") return node;
      if (node.children) {
        const children = Array.isArray(node.children)
          ? node.children
          : [node.children];
        for (const child of children) {
          const found = findImage(child);
          if (found) return found;
        }
      }
      return null;
    }

    const tree = toJSON();
    const imageNode = findImage(tree);
    expect(imageNode).not.toBeNull();
    expect(imageNode.props.source.uri).toBe(expectedMapImageUrl);
  });

  it("calls Linking.openURL with the correct URL when the image is pressed", () => {
    const latitude = 40.7128;
    const longitude = -74.0060;
    const address = "New York, NY";
    const city = "New York"; // propiedad requerida por Location
    const expectedURL = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    // Spy on Linking.openURL
    const openURLSpy = jest
      .spyOn(Linking, "openURL")
      .mockImplementation(() => Promise.resolve(true));

    // Para testear, se asume que se ha agregado testID="hotel-location" al TouchableOpacity en HotelLocation
    const { getByTestId } = render(
      <HotelLocation
        latitude={latitude}
        longitude={longitude}
        address={address}
        city={city}
      />
    );

    const touchable = getByTestId("hotel-location");
    fireEvent.press(touchable);
    expect(openURLSpy).toHaveBeenCalledWith(expectedURL);
  });
});
