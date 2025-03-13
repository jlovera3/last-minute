import React from "react";
import { View, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import tw from "@/src/styles/tailwind";

interface ImageCarouselProps {
  images: string[];
}

/**
 * Reusable Image Carousel component using react-native-reanimated-carousel.
 */
export default function ImageCarousel({ images }: ImageCarouselProps) {
  const { width } = Dimensions.get("window");

  return (
    <View style={tw`w-full h-48`}>
      <Carousel
        width={width * 0.85}
        height={200}
        data={images}
        scrollAnimationDuration={600}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={tw`w-full h-full rounded-lg`}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
}
