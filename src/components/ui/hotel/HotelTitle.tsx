import React from "react";
import { Text } from "react-native";
import tw from "@/src/styles/tailwind";

interface HotelTitleProps {
    title: string;
}

export default function HotelTitle({ title }: HotelTitleProps) {
    return <Text style={tw`text-3xl font-bold text-gray-900`}>{title}</Text>;
}
