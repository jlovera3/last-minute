import { SearchOptions } from "@/src/components/common/SearchOptions";
import TopBar from "@/src/components/common/TopBar";
import CardComponent from "@/src/components/ui/card/CardComponent";
import { Hotel } from "@/src/interfaces/hotel";
import { fetchHotels } from "@/src/services/hotelService";
import tw from "@/src/styles/tailwind";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Text, ActivityIndicator, Provider } from "react-native-paper";

/**
 * Screen to display a list of hotels fetched from the API.
 */
export default function HotelsScreen() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHotels() {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (err) {
        setError("Failed to fetch hotels");
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, []);

  if (loading) {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex-1 items-center justify-center bg-red-100 p-4`}>
        <Text style={tw`text-red-500 text-lg font-bold`}>{error}</Text>
      </View>
    );
  }

  return (
    <Provider>
      <View style={tw`flex-1 bg-white`}>
        <TopBar title="Hotels in London" />
        <FlatList 
          data={hotels}
          keyExtractor={(hotel) => hotel.id.toString()}
          renderItem={({ item }) => (
            <CardComponent
              title={item.name}
              images={item.gallery}
              location={item.location.city}
              stars={item.stars}
              rating={item.userRating}
              price={`${item.price} ${item.currency === "EUR" ? "€" : item.currency}`}
            />
          )}
        />
      </View>
    </Provider>
  );
}
