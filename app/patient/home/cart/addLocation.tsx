import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'twrnc';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CustomMarker from '@/components/customMarker';
import { Link, router, useNavigation, useRouter } from 'expo-router';

const addLocation = () => {
    const [userLocation, setUserLocation] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // Get user's current location when component mounts
        getUserLocation();
    }, []);

    const getUserLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("Please grant location permissions");
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setUserLocation(currentLocation.coords);
        console.log(currentLocation.coords);

    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                {userLocation && (
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            // latitude: userLocation.latitude,
                            // longitude: userLocation.longitude,
                            latitude:  -1.5976637,
                            longitude: 30.0535555,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker
                            coordinate={{
                                // latitude: userLocation.latitude,
                                // longitude: userLocation.longitude,
                                latitude:  -1.5986637,
                                longitude: 30.0512555,
                            }}
                            title="Your Location"
                        />
                    </MapView>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default addLocation