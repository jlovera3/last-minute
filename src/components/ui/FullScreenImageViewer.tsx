import React from "react";
import { Modal, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "@/src/styles/tailwind";

interface FullScreenImageViewerProps {
    imageUri: string | null;
    visible: boolean;
    onClose: () => void;
}

export default function FullScreenImageViewer({
    imageUri,
    visible,
    onClose,
}: FullScreenImageViewerProps) {
    if (!imageUri) return null;

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={tw`flex-1 bg-black justify-center items-center`}>
                <TouchableOpacity style={tw`absolute top-10 right-5`} onPress={onClose}>
                    <MaterialIcons name="close" size={32} color="white" />
                </TouchableOpacity>
                <Image source={{ uri: imageUri }} style={tw`w-full h-full`} resizeMode="contain" />
            </View>
        </Modal>
    );
}
