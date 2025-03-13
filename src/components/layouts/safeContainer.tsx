import React from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

/**
 * A container component that adjusts for safe area insets (notch on iOS, status bar on Android).
 */
const SafeContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Puedes cambiar el color según el diseño
  },
});

export default SafeContainer;
