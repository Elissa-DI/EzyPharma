import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import RBSheet from 'react-native-raw-bottom-sheet'
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Pharmacy {
    id: string;
    name: string;
    address: {
        latitude: number,
        longitude: number
    }
    rating: number;
}

const addLocation = () => {
    const [userLocation, setUserLocation] = useState<any>(null);
    const [isOpen, setOpen] = useState(false);
    const [postalAddress, setPostalAddress] = useState<any>(null);

    const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy[]>([]);
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);


    const refBottomSheet = useRef<any>();

    const router = useRouter();

    useEffect(() => {
        getUserLocation();
    }, []);

    //This is for a modal delay timeout
    useEffect(() => {
        const timer = setTimeout(() => {
            // setOpen(true);
            refBottomSheet.current.open(); // Open the bottom sheet after 1.5 seconds
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const getUserLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("Please grant location permissions");
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;
        getAddressFromCoordinates(latitude, longitude);
        setUserLocation(currentLocation.coords);
        //Consoling your current location coordinates
        // console.log(currentLocation.coords);
    };

    // const getUserLocation = async () => {
    //     try {
    //         const { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             console.log("Please grant location permissions");
    //             return;
    //         }

    //         const currentLocation = await Location.getCurrentPositionAsync({});
    //         const { latitude, longitude } = currentLocation.coords;
    //         getAddressFromCoordinates(latitude, longitude);
    //     } catch (error) {
    //         console.error("Error getting user location:", error);
    //     }
    // };

    const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
        try {
            const location = await Location.reverseGeocodeAsync({ latitude, longitude });
            const { postalCode, city, region, street } = location[0];
            const formattedAddress = `${street}, ${city}, ${region}, Postal Code: ${postalCode}`;
            setPostalAddress(formattedAddress);
        } catch (error) {
            console.error("Error fetching address:", error);
        }
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

    return (
        <View style={{ flex: 1 }}>
            {/* <View style={styles.container}> */}
            {userLocation && (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude,
                        }}
                        title="Your Location"
                    />
                </MapView>
            )}
            {/* </View> */}
            <RBSheet
                ref={refBottomSheet}
            >
                <View>
                    <Text style={tw`font-bold text-xl`}>Confirm your address</Text>
                </View>
                <View style={tw`w-full border-t border-gray-400 my-2`} />
                <View style={tw`flex-row justify-center gap-2`}>
                    <View>
                        <Ionicons name='location' size={28} color='blue' />
                    </View>
                    <View>
                        <Text >
                            {postalAddress
                                ?
                                <Text style={tw`text-gray-400`}>{postalAddress}</Text>
                                :
                                <Text>Loading...</Text>
                            }
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={tw`w-4/5 my-2 py-2 justify-center items-center bg-blue-600 rounded-full`}>
                    <Text style={tw`font-bold text-white`}>Confirm Location</Text>
                </TouchableOpacity>
            </RBSheet>
        </View>
    );
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
        // zIndex: -1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default addLocation