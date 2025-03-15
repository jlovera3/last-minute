import { View, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Hotel from "../assets/icons/hotel.svg";
import Keys from "../assets/icons/keys.svg";
import Button from "../components/ui/button/Button";
import tw from "../styles/tailwind";
import { Colors } from "../constants/Colors";

export default function HomeScreen() {
    const router = useRouter();

    const hotelAnim = useRef(new Animated.Value(0)).current;
    const keysAnim = useRef(new Animated.Value(0)).current;
    const titleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(hotelAnim, {
                toValue: 1,
                duration: 1200,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
            Animated.timing(keysAnim, {
                toValue: 1,
                duration: 1200,
                delay: 400,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue: 1,
                duration: 800,
                delay: 800,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <LinearGradient
            colors={[Colors.light.primary, Colors.light.secondary]}
            style={tw`flex-1 justify-center items-center`}
        >
            <View style={tw`flex-row mb-8 items-center`}>
                <Animated.View
                    style={{
                        opacity: hotelAnim,
                        transform: [
                            { scale: hotelAnim },
                            {
                                rotate: hotelAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["-45deg", "0deg"],
                                }),
                            },
                        ],
                    }}
                >
                    <Hotel width={120} height={120} />
                </Animated.View>
                <Animated.View
                    style={{
                        opacity: keysAnim,
                        transform: [
                            { scale: keysAnim },
                            {
                                rotate: keysAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["45deg", "0deg"],
                                }),
                            },
                        ],
                    }}
                >
                    <Keys width={90} height={90} />
                </Animated.View>
            </View>

            <Animated.Text
                style={[
                    tw`text-3xl font-extrabold text-white mb-6`,
                    {
                        opacity: titleAnim,
                        transform: [
                            {
                                translateY: titleAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            },
                        ],
                    },
                ]}
            >
                Welcome to Last Minute
            </Animated.Text>

            <Animated.View style={{ opacity: keysAnim }}>
                <Button
                    title="View Hotels"
                    onPress={() => router.push("/hotels")}
                    style={'flex w-64 h-16 bg-blue-500 text-2xl text-white items-center justify-center rounded-lg'}
                    textStyle={'text-white font-bold text-lg'}
                />
            </Animated.View>
        </LinearGradient>
    );
}
