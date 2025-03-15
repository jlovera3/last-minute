import React, { useEffect, useState } from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import tw from "@/src/styles/tailwind";
import FullScreenImageViewer from "./FullScreenImageViewer";
import { checkImages } from "@/src/utils/imageUtils";

interface ImageCarouselProps {
  images: string[];
  isCardDisplayed: boolean;
  isWheelDisplayed?: boolean;
}

export default function ImageCarousel({ images, isCardDisplayed, isWheelDisplayed }: ImageCarouselProps) {
  const { width } = Dimensions.get("window");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [validImages, setValidImages] = useState<string[]>([]);
  const hotelPlaceholder = require("@/src/assets/images/hotel-placeholder.png");

  useEffect(() => {
    const validateImages = async () => {
      const filteredImages = await checkImages(images);
      setValidImages(filteredImages);
    };
    validateImages();
  }, [images]);

  const openImage = (image: string) => {
    setSelectedImage(image);
    setIsFullScreen(true);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
  };

  return (
    <View style={tw`w-full h-48`}>
      {validImages.length === 0 ? (
        <TouchableOpacity style={tw`w-full h-full rounded-lg`} onPress={() => openImage(hotelPlaceholder)}>
          <Image source={hotelPlaceholder} style={tw`w-full h-48 rounded-lg`} resizeMode="cover" />
        </TouchableOpacity>
      ) : (
        <Carousel
          width={isCardDisplayed ? (width * (isWheelDisplayed ? 0.8 : 0.85)) : width}
          height={200}
          data={images}
          scrollAnimationDuration={600}
          renderItem={({ item }) => (
            (isCardDisplayed) ? (
              <Image source={{ uri: item }} style={tw`w-full h-full rounded-lg`} resizeMode="cover" />
            ) : (
              <TouchableOpacity style={tw`w-full h-full rounded-lg`} onPress={() => openImage(item)}>
                <Image source={{ uri: item }} style={tw`w-full h-full rounded-lg`} resizeMode="cover" />
              </TouchableOpacity>
            )
          )}
        />)}
      <FullScreenImageViewer
        imageUri={selectedImage}
        visible={isFullScreen}
        onClose={() => closeImage()}
      />
    </View>
  );
}
