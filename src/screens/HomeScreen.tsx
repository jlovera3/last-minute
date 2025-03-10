import { View, Text } from "react-native";
import tw from "../styles/tailwind";
import Button from "../components/ui/Button";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100`}>
      <Text style={tw`text-xl font-bold`}>Welcome to Last Minute</Text>
      <Button title="View Hotels" onPress={() => navigation.navigate("hotels")} />
    </View>
  );
}
