import React from "react";
import { FlatList, Dimensions } from "react-native";
import { Hotel } from "@/src/interfaces/hotel";
import tw from "@/src/styles/tailwind";
import ReelItem from "./ReelItem";

const { height: windowHeight } = Dimensions.get("window");

interface ReelsScrollProps {
    hotels: Hotel[];
}

export default function ReelsScroll({ hotels }: ReelsScrollProps) {
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
                    price={`${item.price} ${item.currency === "EUR" ? "€" : item.currency}`}
                />
            )}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToInterval={windowHeight} // Asegura que cada item ocupa una pantalla
            decelerationRate="fast"
            contentContainerStyle={{ height: hotels.length * windowHeight }} // Evita que el scroll colapse
            style={tw`flex-1`}
        />
    );
}
