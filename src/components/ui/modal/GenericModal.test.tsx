import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GenericModal from "./GenericModal";
import { Provider as PaperProvider, Portal } from "react-native-paper";

jest.useFakeTimers();
jest.mock("react-native/Libraries/Animated/NativeAnimatedModule");


jest.mock("@expo/vector-icons", () => ({
    MaterialCommunityIcons: jest.fn(() => null),
    Ionicons: jest.fn(() => null),
}));

jest.mock("react-native-paper", () => {
    const actual = jest.requireActual("react-native-paper");
    return {
        ...actual,
        IconButton: jest.fn(() => null),
    };
});

beforeEach(() => {
    jest.clearAllMocks();
    renderComponent();
});


afterEach(() => {
    jest.useRealTimers();
});

const renderComponent = () =>
    render(
        <PaperProvider>
            <Portal.Host>
                <GenericModal {...modalProps} />
            </Portal.Host>
        </PaperProvider>
    );
const mockOnClose = jest.fn();
const mockOnSelect = jest.fn();

const modalProps = {
    visible: true,
    title: "Select an Option",
    modalOptions: [
        { icon: "account", label: "Profile", actionClicked: 1 },
        { icon: "settings", label: "Settings", actionClicked: 2 },
    ],
    onClose: mockOnClose,
    onSelect: mockOnSelect,
};

describe("GenericModal Component", () => {

    test("renders modal with title and options", () => {
        const { getByText } = renderComponent();

        expect(getByText("Select an Option")).toBeTruthy();
        expect(getByText("Profile")).toBeTruthy();
        expect(getByText("Settings")).toBeTruthy();
    });

    test("calls onClose when background is pressed", () => {
        const { getByTestId } = renderComponent();

        fireEvent.press(getByTestId("modal-background"));
        expect(mockOnClose).toHaveBeenCalled();
    });

    test("calls onSelect when an option is pressed", () => {
        const { getByText } = renderComponent();

        fireEvent.press(getByText("Profile"));
        expect(mockOnSelect).toHaveBeenCalledWith(1);

        fireEvent.press(getByText("Settings"));
        expect(mockOnSelect).toHaveBeenCalledWith(2);
    });
});
