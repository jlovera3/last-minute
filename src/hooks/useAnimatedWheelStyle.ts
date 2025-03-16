import { useAnimatedStyle, interpolate } from "react-native-reanimated";

export function useAnimatedWheelStyle(
  scrollY: any,
  index: number,
  itemHeight: number
) {
  return useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * itemHeight,
      index * itemHeight,
      (index + 2) * itemHeight,
    ];

    return {
      transform: [
        {
          rotateX: `${interpolate(scrollY.value, inputRange, [30, 0, -30])}deg`,
        },
        {
          translateY: interpolate(scrollY.value, inputRange, [40, 0, -40]),
        },
        {
          scale: interpolate(scrollY.value, inputRange, [0.85, 1, 0.85]),
        },
      ],
      opacity: interpolate(scrollY.value, inputRange, [0.4, 1, 0.4]),
    };
  });
}
