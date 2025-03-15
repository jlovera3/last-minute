import React from "react";
import { FlatList, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Hotel } from "@/src/interfaces/hotel";
import tw from "@/src/styles/tailwind";
import ReelItem from "./ReelItem";

const TOP_BAR_HEIGHT = 64;

const { height: windowHeight } = Dimensions.get("window");

interface ReelsScrollProps {
    hotels: Hotel[];
}

export default function ReelsScroll({ hotels }: ReelsScrollProps) {
    const insets = useSafeAreaInsets();

    const adjustedHeight = windowHeight - TOP_BAR_HEIGHT - insets.top;

    return (
        <FlatList
            data={hotels}
            keyExtractor={(hotel) => hotel.id.toString()}
            renderItem={({ item }) => (
                <ReelItem
                    title={item.name}
                    images={item.gallery}
                    location={item.location.city}
                    stars={item.stars}
                    rating={item.userRating}
                    price={item.price}
                    currency={item.currency}
                    height={adjustedHeight}
                />
            )}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToInterval={adjustedHeight}
            decelerationRate="fast"
            contentContainerStyle={{ height: hotels.length * adjustedHeight }}
            style={tw`flex-1`}
        />
    );
}
