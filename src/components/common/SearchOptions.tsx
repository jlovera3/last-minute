import tw from "@/src/styles/tailwind";
import React from "react";
import { View } from "react-native";
import { OptionButton } from "../ui/button/optionButton/OptionButton";

/**
 * Component with sorting, display, and TBD options.
 */
export function SearchOptions() {
    return (
        <View style={tw`flex-row justify-between mb-4`}>
            <OptionButton title="Sort" modalType="sort" />
            <OptionButton title="Display" modalType="display" />
            <OptionButton title="TBD" modalType="tbd" />
        </View>
    );
}
