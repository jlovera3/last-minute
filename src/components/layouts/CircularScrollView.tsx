import React from "react";
import { Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Hotel } from "@/src/interfaces/hotel";
import CardComponent from "../ui/card/CardComponent";

const { height, width } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.35;
const SPACING = height * 0.1;

interface WheelScrollViewProps {
    hotels: Hotel[];
}

export default function WheelScrollView({ hotels }: WheelScrollViewProps) {
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    return (
        <GestureHandlerRootView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Animated.ScrollView
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                contentContainerStyle={{
                    paddingBottom: SPACING,
                }}
            >
                {hotels.map((hotel, index) => {
                    const animatedStyle = useAnimatedStyle(() => {
                        const inputRange = [
                            (index - 2) * ITEM_HEIGHT,
                            index * ITEM_HEIGHT,
                            (index + 2) * ITEM_HEIGHT,
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

                    return (
                        <Animated.View
                            key={hotel.id}
                            style={[
                                animatedStyle,
                                {
                                    marginBottom: 10,
                                    alignSelf: "center",
                                    width: width * 0.95,
                                    marginTop: 0,
                                    marginVertical: 0,
                                },
                            ]}
                        >
                            <CardComponent hotel={hotel} />
                        </Animated.View>
                    );
                })}
            </Animated.ScrollView>

        </GestureHandlerRootView>
    );
}
