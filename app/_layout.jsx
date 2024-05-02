import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { I18nManager } from "react-native";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Almarai-Bold": require("../assets/fonts/Almarai-Bold.ttf"),
    "Almarai-ExtraBold": require("../assets/fonts/Almarai-ExtraBold.ttf"),
    "Almarai-Light": require("../assets/fonts/Almarai-Light.ttf"),
    "Almarai-Regular": require("../assets/fonts/Almarai-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "ios",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="status/[status]" />
    </Stack>
  );
};

export default RootLayout;
