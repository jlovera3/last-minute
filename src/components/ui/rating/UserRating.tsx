import React from "react";
import { View, Text } from "react-native";
import StarRating from "@/src/components/ui/rating/StarRating";
import tw from "@/src/styles/tailwind";
import { Paragraph } from "react-native-paper";

interface UserRatingProps {
    stars: number;
    rating: number;
}

export default function UserRating({ stars, rating }: UserRatingProps) {
    return (
        <View style={tw`flex-row items-center my-1 justify-between`}>
            <StarRating stars={stars} />
            <Paragraph style={tw`text-gray-600 text-base`}>{rating}/10</Paragraph>
        </View>
    );
}
