import tw from "@/src/styles/tailwind";
import React from "react";
import { View, FlatList, Image } from "react-native";
import { Card, Title, Paragraph, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Generic Card Component for displaying information with an image carousel.
 * @param {string} title - Title of the card (e.g., hotel name)
 * @param {string[]} images - Array of image URLs for the carousel
 * @param {string} location - Location description
 * @param {number} stars - Star rating
 * @param {number} rating - User rating
 * @param {string} price - Price with currency
 */
interface CardComponentProps {
  title: string;
  images: string[];
  location: string;
  stars: number;
  rating: number;
  price: string;
}

export default function CardComponent({ title, images, location, stars, rating, price }: CardComponentProps) {
  return (
    <Card style={tw`p-4 m-4`}>
      <View style={tw`h-50`}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={tw`w-75 h-50 rounded-lg mr-2`}
            />
          )}
        />
      </View>

      <Card.Content style={tw`p-4`}>
        <Title style={tw`text-lg font-bold`}>{title}</Title>

        <View style={tw`flex-row items-center my-1`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <MaterialCommunityIcons
              key={index}
              name={index < stars ? "star" : "star-outline"} // Fills only the required stars
              color="#FFC107"
              size={16}
            />
          ))}
        </View>

        <Divider style={tw`my-2`} />

        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="map-marker" color="gray" size={18} />
            <Paragraph style={tw`text-gray-600 ml-1`}>{location}</Paragraph>
          </View>

          <Paragraph style={tw`text-gray-600 text-base`}>{rating}/10</Paragraph>
        </View>

        <Paragraph style={tw`font-bold text-lg mt-2`}>{price}</Paragraph>
      </Card.Content>
    </Card>
  );
}
