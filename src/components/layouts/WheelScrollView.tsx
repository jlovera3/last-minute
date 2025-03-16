import React from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Hotel } from "@/src/interfaces/hotel";
import WheelItem from "./WheelItem";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.4;

export default function WheelScrollView({ hotels }: { hotels: Hotel[] }) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <GestureHandlerRootView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        contentContainerStyle={{
          paddingBottom: 0,
        }}
      >
        {hotels.map((hotel, index) => (
          <WheelItem
            key={hotel.id}
            hotel={hotel}
            scrollY={scrollY}
            index={index}
          />
        ))}
      </Animated.ScrollView>
    </GestureHandlerRootView>
  );
}
