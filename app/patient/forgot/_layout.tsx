import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';

const ForgotLayout = () => {
  const router = useRouter();

    return (
        <Stack>
            <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
            <Stack.Screen name="reset" options={{ headerShown: false }} />
        </Stack>
    );
}

export default ForgotLayout