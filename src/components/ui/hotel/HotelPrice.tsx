import React from "react";
import { View } from "react-native";
import tw from "@/src/styles/tailwind";
import { Paragraph } from "react-native-paper";
import { getCurrencySymbol } from "@/src/utils/currencyUtils";

/**
 * Component to display hotel price with currency symbol.
 */
interface HotelPriceProps {
  price: number;
  currency: string;
}

export default function HotelPrice({ price, currency }: HotelPriceProps) {
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <View style={tw`flex-row justify-end`}>
      <Paragraph style={tw`text-lg mt-2`}>
        {price}
        {currencySymbol} per night
      </Paragraph>
    </View>
  );
}
