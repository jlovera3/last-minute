import "expo-router/entry";
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { Provider as PaperProvider } from "react-native-paper";
import SafeContainer from "./src/components/layouts/SafeContainer";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { theme } from "./src/styles/theme";

export default function App() {
    const [fontsLoaded] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsBold: Poppins_600SemiBold,
    });

    const colorScheme = useColorScheme();
    
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <PaperProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <SafeContainer>
                        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                            <NavigationContainer>
                                <Navigation />
                            </NavigationContainer>
                            <StatusBar style="auto" />
                        </ThemeProvider>
                    </SafeContainer>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </PaperProvider>
    );
}
