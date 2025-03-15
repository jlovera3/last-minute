import React from "react";
import { View, Text } from "react-native";
import tw from "@/src/styles/tailwind";
import { CheckTime } from "@/src/interfaces/hotel";

interface CheckInOutProps {
    checkIn: CheckTime;
    checkOut: CheckTime;
}

export default function CheckInOut({ checkIn, checkOut }: CheckInOutProps) {
    return (
        <View style={tw`mt-4 p-4 bg-gray-100 rounded-lg`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-lg font-bold text-gray-700`}>Check-in:</Text>
                <Text style={tw`text-lg text-gray-500`}>{checkIn.from} - {checkIn.to}</Text>
            </View>
            <View style={tw`flex-row justify-between mt-2`}>
                <Text style={tw`text-lg font-bold text-gray-700`}>Check-out:</Text>
                <Text style={tw`text-lg text-gray-500`}>{checkOut.from} - {checkOut.to}</Text>
            </View>
        </View>
    );
}
