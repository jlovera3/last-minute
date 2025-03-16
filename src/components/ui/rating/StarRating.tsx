import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "@/src/styles/tailwind";

interface StarRatingProps {
  stars: number;
}

export default function StarRating({ stars }: StarRatingProps) {
  return (
    <View style={tw`flex-row items-center`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = index < stars;
        return (
          <MaterialCommunityIcons
            key={index}
            name={isFilled ? "star" : "star-outline"}
            color="#FFC107"
            size={16}
            testID={isFilled ? `star-filled-${index}` : `star-empty-${index}`}
          />
        );
      })}
    </View>
  );
}
