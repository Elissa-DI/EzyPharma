import React from 'react'
import { useRouter, Stack } from 'expo-router';

const ForgotLayout = () => {
    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen
                name="forgotPassword"
                options={{
                    presentation: 'modal',
                    animation: 'flip',
                    headerShown: false
                }}
            />
            <Stack.Screen name="reset" options={{ headerShown: false }} />
        </Stack>
    );
}

export default ForgotLayout