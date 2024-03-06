import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';

const PatientLayout = () => {
    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen name="forgot" options={{ headerShown: false }} />
        </Stack>
    );
}

export default PatientLayout