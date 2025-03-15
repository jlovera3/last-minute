import "@testing-library/jest-native/extend-expect";

jest.mock("@expo/vector-icons", () => {
    const React = require("react");
    return {
        MaterialCommunityIcons: ({ name, color, size, testID }) =>
            React.createElement("svg", { "data-testid": testID || name }),
    };
});
