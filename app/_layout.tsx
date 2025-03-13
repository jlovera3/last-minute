import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="hotels" options={{ title: "Hotels" }} />
      <Stack.Screen name="hotel-details" options={{ title: "Hotel Details" }} />
    </Stack>
  );
}
