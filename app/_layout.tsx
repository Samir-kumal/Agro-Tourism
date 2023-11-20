import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
<SafeAreaProvider>
<Stack screenOptions={{
      headerStyle:{
        backgroundColor:Colors.primary,
        
      },
      

    }}>
         <Stack.Screen
        name="(auth)/onboard"
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="(auth)/signin"
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="(auth)/registration1"
        
        options={{
          headerShown: true,
          title:"Farmer Registration"
        }}
      />
         <Stack.Screen
                name="(auth)/registration2"

        options={{
          headerShown: true,
          title:"Farmer Registration"

        }}
      />
      
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
                name="(statusbar)/notification"
                

        options={{
          headerShown: true,
          title:"Notification",
          animation:"fade_from_bottom"

        }}
      />
      <Stack.Screen
                name="(statusbar)/profile"

        options={{
          headerShown: true,
          title:"Profile",
          animation:"fade_from_bottom"

        }}
      />
    </Stack>
</SafeAreaProvider>
  );
}
