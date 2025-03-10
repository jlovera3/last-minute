import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "@/src/components/ui/Button";
import tw from "@/src/styles/tailwind";
import { NavigationProps } from "@/src/types/routes";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100`}>
      <Text style={tw`text-xl font-bold`}>Welcome to Last Minute</Text>
      <Button title="View Hotels" onPress={() => navigation.navigate("hotels")} />
    </View>
  );
}
