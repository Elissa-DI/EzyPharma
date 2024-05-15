import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CustomMarker from '@/components/customMarker';
import { useNavigation, useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

interface Pharmacy {
    id: string;
    name: string;
    address: {
        latitude: number,
        longitude: number
    }
    rating: number;
}

const SearchPharmacy = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [userLocation, setUserLocation] = useState<any>(null);
    const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy[]>([]);
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
    const navigation = useNavigation();
    const router = useRouter();
    const [coords, setCoords] = useState([]);


    useEffect(() => {
        getUserLocation();
        fetchPharmacies();
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
    const fetchPharmacies = async () => {
        try {
            const access_token = await AsyncStorage.getItem('access_token');
            const response = await axios.get('https://ezypharma-backend.onrender.com/pharmacy/', {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            if (response.status === 200) {
                console.log(response.data)
                const mappedData: Pharmacy[] = response.data.map((pharmacy: any) => ({
                    id: pharmacy.id,
                    name: pharmacy.name,
                    address: {
                        latitude: pharmacy.lat,
                        longitude: pharmacy.long
                    },
                    rating: pharmacy.rating,
                    // Add other attributes if needed
                }));

                setPharmacies(mappedData);
                console.log("Fetched Pharmacies:", mappedData);
            }
        } catch (error) {
            console.log('Error fetching pharmacies:', error);
        }
    };


    const pharmaciess = [
        {
            "id": 1,
            "name": "Access pharmacy ltd",
            "address": {
                "latitude": -1.5976637,
                "longitude": 30.0535555
            },
            "rating": '4.3'
        },
        {
            "id": 2,
            "name": "Caritate pharmacy",
            "address": {
                "latitude": -1.5826637,
                "longitude": 30.0599999
            },
            "rating": '4.6'
        },
        {
            "id": 3,
            "name": "Pharmacie de Byumba",
            "address": {
                "latitude": -1.5796637,
                "longitude": 30.0599999
            },
            "rating": '5.0'
        },
    ]
    const handlePress = (pharmacyId: string, pharmacyName: string) => {
        const pharmacy = pharmacies.find((pharmacy) => pharmacy.id === pharmacyId);
        if (pharmacy) {
            const url = `/patient/home/(pharmacy)/${pharmacy.id}?name=${encodeURIComponent(pharmacyName)}&selectedPharmacy=${JSON.stringify(pharmacy)}`;
            router.navigate(url);
            // setSelectedPharmacy(pharmacy);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                {userLocation && (
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude,
                            // latitude: -1.5976637,
                            // longitude: 30.0535555,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: userLocation.latitude,
                                longitude: userLocation.longitude,
                                // latitude: -1.6006856,
                                // longitude: 30.0512555,
                            }}
                            title="Your Location"
                        />
                        {pharmacies.map((pharmacy, index) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: pharmacy.address.latitude,
                                    longitude: pharmacy.address.longitude,
                                }}
                                title={pharmacy.name}
                                onPress={() => handlePress(pharmacy.id, pharmacy.name)}

                            >
                                <CustomMarker rating={pharmacy.rating} />
                            </Marker>
                        ))}
                        {selectedPharmacy && selectedPharmacy.length > 0 && (
                            <Polyline
                                coordinates={[
                                    {
                                        // latitude: -1.5986637,
                                        // longitude: 30.0512555,
                                        latitude: userLocation.latitude,
                                        longitude: userLocation.longitude,
                                    },
                                    {
                                        latitude: selectedPharmacy[0].address.latitude,
                                        longitude: selectedPharmacy[0].address.longitude
                                    }
                                ]}
                                strokeColor="#FF0000"
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
