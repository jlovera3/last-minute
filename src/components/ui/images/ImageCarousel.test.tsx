// ImageCarousel.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import ImageCarousel from "./ImageCarousel";

// DummyCarousel with key attribute to avoid key warnings
jest.mock("react-native-reanimated-carousel", () => {
    const React = require("react");
    return function DummyCarousel(props: any) {
        return (
            <React.Fragment>
                {props.data.map((item: string, index: number) => (
                    <React.Fragment key={index}>
                        {props.renderItem({ item, index })}
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    };
});


jest.mock("./FullScreenImageViewer", () => {
    const React = require("react");
    const { Text } = require("react-native");

    const MockFullScreenImageViewer = (props: any) =>
        props.visible ? <Text>FullScreen</Text> : null;

    MockFullScreenImageViewer.displayName = "MockFullScreenImageViewer";

    return MockFullScreenImageViewer;
});


// Helper function to recursively count nodes by type in the JSON tree
function countNodesByType(node: any, type: string): number {
    if (!node) return 0;
    if (Array.isArray(node)) {
        return node.reduce((acc, child) => acc + countNodesByType(child, type), 0);
    }
    let count = node.type === type ? 1 : 0;
    if (node.children) {
        count += countNodesByType(node.children, type);
    }
    return count;
}

describe("ImageCarousel", () => {
    const images = ["https://example.com/image1.jpg"];

    it("renders images directly when isCardDisplayed is true", () => {
        const { toJSON } = render(
            <ImageCarousel images={images} isCardDisplayed={true} />
        );
        const tree = toJSON();

        // Count the number of Image components in the rendered tree
        const imageCount = countNodesByType(tree, "Image");
        // Count the number of TouchableOpacity components in the rendered tree
        const touchableCount = countNodesByType(tree, "TouchableOpacity");

        expect(imageCount).toBe(images.length);
        expect(touchableCount).toBe(0);
    });
});
