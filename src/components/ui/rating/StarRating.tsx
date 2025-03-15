import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "@/src/styles/tailwind";

/**
 * StarRating Component to display hotel rating as stars.
 * @param {number} stars - The number of stars the hotel has (0-5)
 */
interface StarRatingProps {
    stars: number;
}

export default function StarRating({ stars }: StarRatingProps) {
    return (
        <View style={tw`flex-row items-center`}>
            {Array.from({ length: 5 }).map((_, index) => (
                <MaterialCommunityIcons
                    key={index}
                    name={index < stars ? "star" : "star-outline"}
                    color="#FFC107"
                    size={16}
                />
            ))}
        </View>
    );
}
