import React, { useState } from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import tw from "@/src/styles/tailwind";
import FullScreenImageViewer from "./FullScreenImageViewer";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const { width } = Dimensions.get("window");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openImage = (image: string) => {
    setSelectedImage(image);
    setIsFullScreen(true);
  };

  return (
    <View style={tw`w-full h-48`}>
      <Carousel
        width={width * 0.85}
        height={200}
        data={images}
        scrollAnimationDuration={600}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={tw`w-full h-full rounded-lg`} resizeMode="cover" />
        )}
      />
      <FullScreenImageViewer
        imageUri={selectedImage}
        visible={isFullScreen}
        onClose={() => setIsFullScreen(false)}
      />
    </View>
  );
}
