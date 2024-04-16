import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const HomeLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="(pharmacy)/[id]"
                options={{
                    presentation: 'fullScreenModal',
                    animation: 'simple_push',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(pharmacy)/medicineDetails"
                options={{
                    presentation: 'containedModal',
                    animation: 'simple_push',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="cart"
                options={{
                    animation: 'simple_push',
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default HomeLayout