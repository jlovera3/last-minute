import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { Modal, Portal, Text, IconButton } from "react-native-paper";
import tw from "@/src/styles/tailwind";

interface ModalOption {
    icon: string;
    label: string;
    actionClicked: number;
}

interface GenericModalProps {
    visible: boolean;
    title: string;
    modalOptions: ModalOption[];
    onClose: () => void;
    onSelect: (actionClicked: number) => void;
}

const GenericModal: React.FC<GenericModalProps> = ({ visible, title, modalOptions, onClose, onSelect }) => {
    const translateY = React.useRef(new Animated.Value(300)).current;

    React.useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 300,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    return (
        <Portal>
            <TouchableOpacity style={tw`absolute inset-0 bg-black/50`} activeOpacity={1} onPress={onClose} />
            <Animated.View
                style={[
                    tw`absolute bottom-0 w-full bg-white p-4 rounded-t-2xl`,
                    { transform: [{ translateY }] },
                ]}
            >
                <View style={tw`flex-row items-center justify-between mb-4`}>
                    <IconButton icon="close" onPress={onClose} />
                    <Text style={tw`text-lg font-bold`}>{title}</Text>
                    <View style={tw`w-8`} />
                </View>
                {modalOptions.map((option) => (
                    <TouchableOpacity
                        key={option.actionClicked}
                        style={tw`flex-row items-center p-3 border-b border-gray-200`}
                        onPress={() => onSelect(option.actionClicked)}
                    >
                        <IconButton icon={option.icon} size={20} />
                        <Text style={tw`ml-2 text-base`}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </Portal>
    );
};

export default GenericModal;