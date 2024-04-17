import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CartLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='myCart'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='addLocation'
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default CartLayout