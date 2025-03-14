import React, { useEffect, useState } from "react";
import { Card } from "react-native-paper";
import tw from "@/src/styles/tailwind";
import { checkImages } from "@/src/utils/imageUtils";
import ImageCarousel from "../ImageCarousel";
import HotelInfo from "../hotel/hotelInfo";
import Animated, { FadeInUp } from "react-native-reanimated";

interface CardComponentProps {
  title: string;
  images: string[];
  location: string;
  stars: number;
  rating: number;
  price: string;
  style?: string;
}

export default function CardComponent({
  title,
  images = [],
  stars,
  rating,
  price,
  style,
}: CardComponentProps) {
  const [validImages, setValidImages] = useState<string[]>([]);
  const hotelPlaceholder = require("@/src/assets/images/hotel-placeholder.png");

  useEffect(() => {
    const validateImages = async () => {
      const filteredImages = await checkImages(images);
      setValidImages(filteredImages);
    };
    validateImages();
  }, [images]);

  return (
    <Animated.View entering={FadeInUp.duration(500).springify()}>
      <Card style={tw`${style ? style : "m-4 p-4"}`}>
        {/* Show Carousel if multiple valid images exist, otherwise show cover */}
        {validImages.length > 1 ? (
          <ImageCarousel images={validImages} />
        ) : (
          <Card.Cover
            source={validImages.length > 0 ? { uri: validImages[0] } : hotelPlaceholder}
            style={tw`h-48 w-full rounded-lg`}
          />
        )}

        <Card.Content style={tw`px-4 pt-4 pb-0`}>
          <HotelInfo title={title} stars={stars} rating={rating} price={price} />
        </Card.Content>
      </Card >
    </Animated.View>
  );
}
