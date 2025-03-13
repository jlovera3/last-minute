import React, { useEffect, useState } from "react";
import { View, Dimensions, Image } from "react-native";
import { Card, Title, Paragraph, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "@/src/styles/tailwind";
import { checkImages } from "@/src/utils/imageUtils";
import ImageCarousel from "../ImageCarousel";
import StarRating from "../StarRating";

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
    <Card style={tw`p-4 ${style ? style : "m-4"}`}>
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
        <Title style={tw`text-xl`}>{title}</Title>

        <View style={tw`flex-row items-center my-1 justify-between`}>
          <StarRating stars={stars} />
          <Paragraph style={tw`text-gray-600 text-base`}>{rating}/10</Paragraph>
        </View>

        <Divider style={tw`my-2`} />

        <View style={tw`flex-row justify-end`}>
          <Paragraph style={tw`text-lg mt-2 justify-end`}>{price} per night</Paragraph>
        </View>

      </Card.Content>
    </Card >
  );
}
