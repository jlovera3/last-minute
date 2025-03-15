import React, { useEffect, useState } from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import tw from "@/src/styles/tailwind";
import HotelInfo from "../ui/hotel/HotelInfo";
import { checkImages } from "@/src/utils/imageUtils";
import { useRouter } from "expo-router";
import { Hotel } from "@/src/interfaces/hotel";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

interface ReelItemProps {
    hotel: Hotel;
    height?: number;
}

export default function ReelItem({ hotel, height }: ReelItemProps) {
    const [validImages, setValidImages] = useState<string[]>([]);
    const router = useRouter();

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
        <TouchableOpacity onPress={handlePress}>
            <View style={[tw`relative w-full`, { height: height ? height : windowHeight }]}>
                <Image
                    source={validImages.length > 1 ? { uri: hotel.gallery[0] } : require("@/src/assets/images/hotel-placeholder.png")}
                    style={tw`absolute w-full h-full`}
                    resizeMode="cover"
                />
                <BlurView intensity={70} tint="light" style={[tw`absolute bottom-0 w-full p-6`, { height: windowHeight * 0.25 }]}>
                    <HotelInfo title={hotel.name} stars={hotel.stars} rating={hotel.userRating} price={hotel.price} currency={hotel.currency} />
                </BlurView>
            </View>
        </TouchableOpacity>
    );
}
