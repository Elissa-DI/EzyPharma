import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import tw from 'twrnc';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CustomMarker from '@/components/customMarker';
import { Link, router, useNavigation, useRouter } from 'expo-router';

const SearchPharmacy = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [userLocation, setUserLocation] = useState<any>(null);
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);
    const navigation = useNavigation();
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

    const pharmacies = [
        {
            "id": 1,
            "name": "Access pharmacy ltd",
            "address": {
                "latitude": -1.5976637,
                "longitude": 30.0535555
            },
            "rating": '4.5'
        },
        {
            "id": 2,
            "name": "Caritate pharmacy",
            "address": {
                "latitude": -1.5826637,
                "longitude": 30.0599999
            },
            "rating": '5.0'
        },
    ]
    const handlePress = (pharmacyId: number, pharmacyName: string) => {
        const pharmacy = pharmacies.find((pharmacy) => pharmacy.id === pharmacyId);
        if (pharmacy) {
            const url = `/patient/home/(pharmacy)/${pharmacy.id}?id=${pharmacyId}&name=${encodeURIComponent(pharmacyName)}`;
            router.navigate(url);
            setSelectedPharmacy(pharmacy);
        }
    }

    //This is for testing a polyline


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
                            latitude: -1.5976637,
                            longitude: 30.0535555,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker
                            coordinate={{
                                //  latitude: userLocation.latitude,
                                // longitude: userLocation.longitude,
                                latitude: -1.5986637,
                                longitude: 30.0512555,
                            }}
                            title="Your Location"
                        />
                        {pharmacies.map((pharmacy) => (
                            <Marker
                                key={pharmacy.id}
                                coordinate={pharmacy.address}
                                title={pharmacy.name}
                                // onPress={() => handlePharmacyRedirect(pharmacy.id, pharmacy.name)}
                                onPress={() => handlePress(pharmacy.id, pharmacy.name)}

                            >
                                <CustomMarker rating={pharmacy.rating} />
                            </Marker>
                        ))}
                        {selectedPharmacy && (
                            <Polyline
                                coordinates={[
                                    {
                                        //latitude: userLocation.latitude, longitude: userLocation.longitude
                                        latitude: -1.5986637,
                                        longitude: 30.0512555,
                                    },
                                    { latitude: selectedPharmacy.address.latitude, longitude: selectedPharmacy.address.longitude }
                                ]}
                                strokeColor="#FF0000" // Change this to customize the polyline color
                                strokeWidth={2}
                            />
                        )}
                    </MapView>
                )}
            </View>
        </View>
    );
};

export default SearchPharmacy;

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
