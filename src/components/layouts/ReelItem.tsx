import React, { useEffect, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import tw from "@/src/styles/tailwind";
import HotelInfo from "../ui/hotel/HotelInfo";
import { checkImages } from "@/src/utils/imageUtils";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

interface ReelItemProps {
    title: string;
    images: string[];
    location: string;
    stars: number;
    rating: number;
    price: number;
    currency: string;
    height?: number;
}

export default function ReelItem({ title, images, location, stars, rating, price, currency, height }: ReelItemProps) {
    const [validImages, setValidImages] = useState<string[]>([]);

    useEffect(() => {
        const validateImages = async () => {
            const filteredImages = await checkImages(images);
            setValidImages(filteredImages);
        };
        validateImages();
    }, [images]);

    return (
        <View style={[tw`relative w-full`, { height: height ? height : windowHeight }]}>
            <Image
                source={validImages.length > 1 ? { uri: images[0] } : require("@/src/assets/images/hotel-placeholder.png")}
                style={tw`absolute w-full h-full`}
                resizeMode="cover"
            />
            <BlurView intensity={70} tint="light" style={[tw`absolute bottom-0 w-full p-6`, { height: windowHeight * 0.25 }]}>
                <HotelInfo title={title} stars={stars} rating={rating} price={price} currency={currency} />
            </BlurView>
        </View>
    );
}
