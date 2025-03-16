import React from "react";
import Animated from "react-native-reanimated";
import { Hotel } from "@/src/interfaces/hotel";
import { useAnimatedWheelStyle } from "@/src/hooks/useAnimatedWheelStyle";
import CardComponent from "../ui/card/CardComponent";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_HEIGHT = width * 0.99;

export default function WheelItem({
  hotel,
  scrollY,
  index,
}: {
  hotel: Hotel;
  scrollY: any;
  index: number;
}) {
  const animatedStyle = useAnimatedWheelStyle(scrollY, index, ITEM_HEIGHT);

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          marginBottom: 20,
          alignSelf: "center",
          width: width * 0.95,
          marginTop: 0,
          marginVertical: 0,
        },
      ]}
    >
      <CardComponent hotel={hotel} style="mx-2 p-4" isWheelDisplayed />
    </Animated.View>
  );
}
