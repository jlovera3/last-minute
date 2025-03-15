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
                <TouchableOpacity
                    style={tw`absolute top-10 right-5 z-50 bg-black/50 p-2 rounded-full`}
                    onPress={onClose}
                    activeOpacity={0.7}
                >
                    <MaterialIcons name="close" size={32} color="white" />
                </TouchableOpacity>

                <View style={tw`absolute inset-0 justify-center items-center`}>
                    <Image
                        source={{ uri: imageUri }}
                        style={tw`w-full h-full`}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </Modal>
    );
}
