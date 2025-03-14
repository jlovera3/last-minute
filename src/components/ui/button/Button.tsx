import { TouchableOpacity, Text } from "react-native";
import tw from "../../../styles/tailwind";

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary";
    style?: string;
}

export default function Button({ title, onPress, variant = "primary", style }: ButtonProps) {
    return (
        <TouchableOpacity
            style={tw`px-4 py-2 rounded-lg ${variant === "primary" ? "bg-blue-500" : "bg-gray-500"
                }`}
            onPress={onPress}
        >
            <Text style={tw`${style ? style : 'text-white text-center'}`}>{title}</Text>
        </TouchableOpacity>
    );
}
