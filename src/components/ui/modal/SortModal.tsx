import tw from "@/src/styles/tailwind";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

interface SortModalProps {
    modalType: "sort" | "display" | "tbd";
    onClose: () => void;
}

/**
 * Modal content based on the type of option selected.
 */
export function SortModal({ modalType, onClose }: SortModalProps) {
    return (
        <View style={tw`p-4`}>
            <Text style={tw`text-lg font-bold mb-4`}>Options for {modalType}</Text>
            {modalType === "sort" && (
                <>
                    <Button onPress={onClose}>Recommended</Button>
                    <Button onPress={onClose}>Price (Lowest First)</Button>
                    <Button onPress={onClose}>Price (Highest First)</Button>
                    <Button onPress={onClose}>Stars (Highest First)</Button>
                    <Button onPress={onClose}>Stars (Lowest First)</Button>
                </>
            )}
            {modalType === "display" && (
                <>
                    <Button onPress={onClose}>Grid View</Button>
                    <Button onPress={onClose}>List View</Button>
                </>
            )}
            {modalType === "tbd" && <Text>Future functionality</Text>}
        </View>
    );
}
