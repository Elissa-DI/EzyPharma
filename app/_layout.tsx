import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useEffect } from 'react';
import { ToastProvider } from 'react-native-toast-notifications'

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(intro)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    appeamon: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

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

  const router = useRouter();

  return (
    <ToastProvider
      placement="top"
      animationType='slide-in'
      successColor="green"
      dangerColor="red"
    >
      <Stack>
        <Stack.Screen name="(intro)" options={{ headerShown: false }} />
        <Stack.Screen name="patient" options={{ headerShown: false }} />
        <Stack.Screen name="hospital" options={{ headerShown: false }} />
        <Stack.Screen name="pharmacy" options={{ headerShown: false }} />
        
      </Stack>
    </ToastProvider>
  );
}
