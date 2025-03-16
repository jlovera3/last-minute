import React from "react";
import { TouchableOpacity, Image, Linking } from "react-native";
import tw from "@/src/styles/tailwind";
import { Location } from "@/src/interfaces/hotel";

export default function HotelLocation({
  latitude,
  longitude,
  address,
}: Location) {
  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const mapImageUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=14&l=map&size=600,300`;

  return (
    <TouchableOpacity
      testID="hotel-location"
      style={tw`relative mt-4 rounded-lg overflow-hidden`}
      onPress={openMaps}
    >
      <Image
        source={{ uri: mapImageUrl }}
        style={tw`w-full h-40`}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}
