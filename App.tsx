import "expo-router/entry";
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from "react-native";
import Navigation from "./src/navigation/Navigation";
import SafeContainer from "./src/components/layouts/safeContainer";

export default function App() {
    const colorScheme = useColorScheme();

    return (
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
    );
}
