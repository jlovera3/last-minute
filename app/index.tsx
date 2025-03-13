import { View, Text, Animated, Easing } from "react-native";
import tw from "../src/styles/tailwind";
import Button from "../src/components/ui/button/Button";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import Hotel from "../src/assets/icons/hotel.svg";
import Keys from "../src/assets/icons/keys.svg";


export default function HomeScreen() {
  const router = useRouter();

  const hotelAnim = useRef(new Animated.Value(0)).current;
  const keysAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(hotelAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(keysAnim, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100`}>
      <View style={tw`flex-row mb-6`}>
        <Animated.View style={{ opacity: hotelAnim, transform: [{ scale: hotelAnim }] }}>
          <Hotel width={100} height={100} />
        </Animated.View>
        <Animated.View style={{ opacity: keysAnim, transform: [{ scale: keysAnim }] }}>
          <Keys width={80} height={80} />
        </Animated.View>
      </View>

      <Text style={tw`text-2xl font-bold text-gray-800 mb-4`}>Welcome to Last Minute</Text>

      <Animated.View style={{ transform: [{ scale: keysAnim }] }}>
        <Button
          title="View Hotels"
          onPress={() => router.push("/hotels")}
          style={'flex w-64 h-16 bg-blue-500 text-2xl text-white items-center justify-center'}
        />
      </Animated.View>
    </View>
  );
}
