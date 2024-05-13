import React from 'react'
import { Stack } from 'expo-router';

const PharmacyLayout = () => {
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