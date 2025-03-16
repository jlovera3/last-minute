import React from "react";
import { View } from "react-native";
import { Title, Divider } from "react-native-paper";
import tw from "@/src/styles/tailwind";
import HotelPrice from "./HotelPrice";
import UserRating from "../rating/UserRating";

interface HotelInfoProps {
  title: string;
  stars: number;
  rating: number;
  price: number;
  currency: string;
}

export default function HotelInfo({
  title,
  stars,
  rating,
  price,
  currency,
}: HotelInfoProps) {
  return (
    <View style={tw`p-4`}>
      <Title style={tw`text-xl`}>{title}</Title>
      <UserRating stars={stars} rating={rating} />
      <Divider style={tw`my-2`} />
      <HotelPrice price={price} currency={currency} />
    </View>
  );
}
