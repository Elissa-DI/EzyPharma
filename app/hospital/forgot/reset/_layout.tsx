import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';

const ResetLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="resetLayout" options={{ headerShown: false }} />
            <Stack.Screen name="resetPassword" options={{ headerShown: false }} />
        </Stack>
    )
}

export default ResetLayout