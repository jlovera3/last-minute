import { View, Text } from "react-native";
import tw from "../styles/tailwind";

export default function HotelsScreen() {
    return (
        <View style={tw`flex-1 items-center justify-center bg-white`}>
            <Text style={tw`text-lg font-semibold`}>List of Hotels</Text>
        </View>
    );
}
