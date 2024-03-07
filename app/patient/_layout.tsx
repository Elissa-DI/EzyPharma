import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const PatientLayout = () => {

    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen name="forgot" options={{ headerShown: false }} />
        </Stack>
    );
}

export default PatientLayout