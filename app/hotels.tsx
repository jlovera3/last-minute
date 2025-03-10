import { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import tw from "../src/styles/tailwind";
import { fetchHotels } from "../src/services/hotelService";
import { Hotel } from "../src/interfaces/hotel";

/**
 * Screen to display a list of hotels fetched from the API.
 */
export default function HotelsScreen() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadHotels() {
            try {
                const data = await fetchHotels();
                setHotels(data);
            } catch (err) {
                setError("Failed to fetch hotels");
            }
        }

        loadHotels();
    }, []);

    if (error) {
        return (
            <View style={tw`flex-1 items-center justify-center bg-red-100 p-4`}>
                <Text style={tw`text-red-500 text-lg font-bold`}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={tw`flex-1 bg-white p-4`}>
            <Text style={tw`text-xl font-bold mb-4`}>Available Hotels</Text>

            <FlatList
                data={hotels}
                keyExtractor={(hotel) => hotel.id.toString()}
                renderItem={({ item }) => (
                    <View style={tw`mb-4 p-4 border rounded-lg bg-gray-100`}>
                        <Image
                            source={{ uri: item.gallery[0] }}
                            style={tw`w-full h-40 rounded-lg mb-2`}
                        />
                        <Text style={tw`text-lg font-bold`}>{item.name}</Text>
                        <Text style={tw`text-gray-600`}>{item.location.city}</Text>
                        <Text style={tw`text-gray-700 font-semibold`}>
                            {item.stars} ⭐ - {item.userRating}/10
                        </Text>
                        <Text style={tw`text-green-700 font-bold`}>
                            {item.price} {item.currency}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}
