import "@testing-library/jest-native/extend-expect";

jest.mock("@expo/vector-icons", () => ({
  MaterialCommunityIcons: jest.fn(),
  Ionicons: jest.fn(),
}));

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
  processFontFamily: jest.fn(() => "mock-font"),
}));

jest.mock("react-native-paper", () => {
  const actual = jest.requireActual("react-native-paper");
  return {
    ...actual,
    IconButton: ({ icon, onPress, testID }) => (
      <button data-testid={testID} onClick={onPress}>
        {icon}
      </button>
    ),
    Portal: ({ children }) => children,
  };
});

jest.mock("react-native/src/private/animated/NativeAnimatedHelper", () => {
  return {
    default: jest.fn(),
    addWhitelistedNativeProps: jest.fn(),
    addWhitelistedUIProps: jest.fn(),
  };
});
jest.mock("react-native/Libraries/Animated/NativeAnimatedModule", () => ({
  default: jest.fn(),
}));
