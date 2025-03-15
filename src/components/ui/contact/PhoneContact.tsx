import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "@/src/styles/tailwind";

interface PhoneContactProps {
    phoneNumber: string;
}

export default function PhoneContact({ phoneNumber }: PhoneContactProps) {
    const handleCall = () => Linking.openURL(`tel:${phoneNumber}`);

    return (
        <TouchableOpacity
            onPress={handleCall}
            style={tw`flex-row items-center justify-center bg-green-500 p-4 rounded-lg mt-4`}
        >
            <MaterialIcons name="phone" size={24} color="white" />
            <Text style={tw`text-white font-bold text-lg ml-2`}>Phone</Text>
        </TouchableOpacity>
    );
}
