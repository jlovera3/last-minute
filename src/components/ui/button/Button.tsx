import { TouchableOpacity, Text } from "react-native";
import tw from "../../../styles/tailwind";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: string;
  textStyle?: string;
}

export default function Button({
  title,
  onPress,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity style={tw`${style ? style : ""}`} onPress={onPress}>
      <Text style={tw`${textStyle ? textStyle : ""}`}>{title}</Text>
    </TouchableOpacity>
  );
}
