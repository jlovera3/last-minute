import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  home: undefined;
  hotels: undefined;
  "hotel-details": { hotelId: string };
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
