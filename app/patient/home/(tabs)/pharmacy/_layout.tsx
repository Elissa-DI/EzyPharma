import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';

const PharmacyLayout = () => {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen name='searchPharmacy'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}

export default PharmacyLayout