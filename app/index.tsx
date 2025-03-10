import { View, Text } from "react-native";
import tw from "../src/styles/tailwind";
import Button from "../src/components/ui/Button";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100`}>
      <Text style={tw`text-xl font-bold`}>Welcome to Last Minute</Text>
      <Button title="View Hotels" onPress={() => router.push("/hotels")} />
    </View>
  );
}
