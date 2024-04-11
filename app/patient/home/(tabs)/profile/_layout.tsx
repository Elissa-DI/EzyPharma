import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';

const ProfileLayout = () => {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen name="profilePage" options={{
                presentation: 'modal',
                headerShown: false
            }} />
            <Stack.Screen name="editProfile" options={{
                presentation: 'fullScreenModal',
                animation: 'slide_from_right',
                headerShown: false
            }} />
            <Stack.Screen name="mySaved" options={{
                presentation: 'fullScreenModal',
                animation: 'slide_from_right',
                headerShown: false,
            }} />
            <Stack.Screen name="paymentMethod" options={{
                presentation: 'fullScreenModal',
                animation: 'slide_from_right',
                headerShown: false
            }} />
            <Stack.Screen name="faqs" options={{
                presentation: 'fullScreenModal',
                animation: 'slide_from_right',
                headerShown: false
            }} />
        </Stack>
    );
}

export default ProfileLayout