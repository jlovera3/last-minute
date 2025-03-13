import React from "react";
import { View } from "react-native";
import { Title, Paragraph, Divider } from "react-native-paper";
import StarRating from "@/src/components/ui/StarRating";
import tw from "@/src/styles/tailwind";

interface HotelInfoProps {
    title: string;
    stars: number;
    rating: number;
    price: string;
}

export default function HotelInfo({ title, stars, rating, price }: HotelInfoProps) {
    return (
        <View>
            <Title style={tw`text-xl`}>{title}</Title>

            <View style={tw`flex-row items-center my-1 justify-between`}>
                <StarRating stars={stars} />
                <Paragraph style={tw`text-gray-600 text-base`}>{rating}/10</Paragraph>
            </View>

            <Divider style={tw`my-2`} />

            <View style={tw`flex-row justify-end`}>
                <Paragraph style={tw`text-lg mt-2`}>{price} per night</Paragraph>
            </View>
        </View>
    );
}
