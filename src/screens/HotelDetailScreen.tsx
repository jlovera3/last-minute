import React, {  } from "react";
import { ScrollView, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Appbar, Divider } from "react-native-paper";
import tw from "@/src/styles/tailwind";
import CheckInOut from "@/src/components/ui/schedule/CheckInOut";
import PhoneContact from "@/src/components/ui/contact/PhoneContact";
import MailContact from "@/src/components/ui/contact/MailContact";
import HotelLocation from "@/src/components/ui/hotel/HotelLocation";
import HotelPrice from "@/src/components/ui/hotel/HotelPrice";
import UserRating from "@/src/components/ui/rating/UserRating";
import ImageCarousel from "../components/ui/images/ImageCarousel";
import { Hotel } from "@/src/interfaces/hotel";

export default function HotelDetailsScreen() {
    const params = useLocalSearchParams();
    const router = useRouter();
    const hotel: Hotel = JSON.parse(params.hotel as string);

    return (
        <View style={tw`flex-1 bg-white`}>
            <Appbar.Header style={tw`bg-white shadow-md`}>
                <Appbar.Action icon="close" onPress={() => router.back()} />
                <Appbar.Content title={hotel.name} />
            </Appbar.Header>

            <ImageCarousel images={hotel.gallery} isCardDisplayed={false} />

            <ScrollView style={tw`flex-1 bg-white`} contentContainerStyle={tw`pb-20`}>
                <View style={tw`p-4`}>
                    <UserRating stars={hotel.stars} rating={hotel.userRating} />
                    <HotelLocation {...hotel.location} />
                    <CheckInOut checkIn={hotel.checkIn} checkOut={hotel.checkOut} />
                    <PhoneContact phoneNumber={hotel.contact.phoneNumber} />
                    <MailContact email={hotel.contact.email} />
                </View>
            </ScrollView>

            <View style={tw`pb-4 px-10`}>
                <Divider style={tw`mb-2`} />
                <HotelPrice price={hotel.price} currency={hotel.currency} />
            </View>
        </View>
    );
}
