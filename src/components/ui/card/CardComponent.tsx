import React, { useEffect, useState } from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import tw from "@/src/styles/tailwind";
import { checkImages } from "@/src/utils/imageUtils";
import ImageCarousel from "../ImageCarousel";
import HotelInfo from "../hotel/hotelInfo";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Hotel } from "@/src/interfaces/hotel";

interface CardComponentProps {
  hotel: Hotel;
  style?: string;
  isWheelDisplayed?: boolean;
}

export default function CardComponent({ hotel, style, isWheelDisplayed }: CardComponentProps) {
  const router = useRouter();
  const [validImages, setValidImages] = useState<string[]>([]);
  const hotelPlaceholder = require("@/src/assets/images/hotel-placeholder.png");

  useEffect(() => {
    const validateImages = async () => {
      const filteredImages = await checkImages(hotel.gallery);
      setValidImages(filteredImages);
    };
    validateImages();
  }, [hotel.gallery]);

  const handlePress = () => {
    router.push({
      pathname: "/hotel-details",
      params: { hotel: JSON.stringify(hotel) },
    });
  };

  return (
    <Animated.View entering={FadeInUp.duration(500).springify()}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <Card style={tw`${style ? style : "m-4 p-4"}`}>
          {validImages.length > 1 ? (
            <ImageCarousel images={validImages} isCardDisplayed isWheelDisplayed={isWheelDisplayed} />
          ) : (
            <Card.Cover
              source={validImages.length > 0 ? { uri: validImages[0] } : hotelPlaceholder}
              style={tw`h-48 w-full rounded-lg`}
            />
          )}

          <Card.Content style={tw`px-4 pt-4 pb-0`}>
            <HotelInfo
              title={hotel.name}
              stars={hotel.stars}
              rating={hotel.userRating}
              price={hotel.price}
              currency={hotel.currency}
            />
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </Animated.View>
  );
}
