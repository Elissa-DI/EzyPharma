import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { Link, router, useLocalSearchParams, useRouter } from 'expo-router';
import RBSheet from 'react-native-raw-bottom-sheet'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';


interface Pharmacy {
    id: string;
    name: string;
    address: {
        latitude: number,
        longitude: number
    }
    rating: number;
}

type RootStackParamList = {
    AddLocation: {
        selectedPharmacy?: Pharmacy;
    };
};

const addLocation = () => {
    const [userLocation, setUserLocation] = useState<any>(null);
    const [isOpen, setOpen] = useState(false);
    const [postalAddress, setPostalAddress] = useState<any>(null);

    // const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy[]>([]);
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);


    const refBottomSheet = useRef<any>();
    const refAllDoneSheet = useRef<any>();

    // const route = useRoute();
    // // const selectedPharmacyJson = route.params?.selectedPharmacy;
    // const selectedPharmacyJson = (route.params as RootStackParamList['AddLocation'])?.selectedPharmacy;
    // const selectedPharmacy: Pharmacy | null = selectedPharmacyJson ? selectedPharmacyJson : null;

    // console.log("Selected Pharmacy:", selectedPharmacy);

    const route = useRoute();
    const selectedPharmacy: Pharmacy | null = route.params?.selectedPharmacy;

    console.log("Selected Pharmacy:", selectedPharmacy);


    useEffect(() => {
        getUserLocation();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            refBottomSheet.current.open();
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
            const formattedAddress = `${street}, ${region}`;
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

    const handleConfirmLocation = () => {
        refBottomSheet.current.close();
        refAllDoneSheet.current.open();
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
                    {/* {selectedPharmacy && (
                        <>
                            <Marker
                                coordinate={{
                                    latitude: selectedPharmacy.address.latitude,
                                    longitude: selectedPharmacy.address.longitude,
                                }}
                                title={selectedPharmacy.name}
                            />
                            <Polyline
                                coordinates={[
                                    {
                                        latitude: userLocation.latitude,
                                        longitude: userLocation.longitude,
                                    },
                                    {
                                        latitude: selectedPharmacy.address.latitude,
                                        longitude: selectedPharmacy.address.longitude
                                    }
                                ]}
                                strokeColor="#FF0000"
                                strokeWidth={2}
                            />
                        </>
                    )} */}
                </MapView>
            )}
            <TouchableOpacity style={tw`absolute top-8 left-4 flex-row items-center gap-28 p-1 bg-white rounded-md`}>
                <Link href="../" style={tw`p-[7px]`}>
                    <FontAwesome name="chevron-left" size={18} />
                </Link>
            </TouchableOpacity>
            {/* </View> */}
            <RBSheet
                ref={refBottomSheet}
                customStyles={{
                    wrapper: {
                        padding: 30
                    },
                    container: {
                        borderRadius: 20,
                        paddingVertical: 15,
                        paddingHorizontal: 25,
                        alignItems: 'center',
                        height: 180,
                        gap: 3
                    }
                }}
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
                <TouchableOpacity style={tw`w-full my-3 py-2 justify-center items-center bg-blue-600 rounded-full`} onPress={handleConfirmLocation}>
                    <Text style={tw`font-bold text-white`}>Confirm Location</Text>
                </TouchableOpacity>
            </RBSheet>
            <RBSheet
                ref={refAllDoneSheet}
                customStyles={{
                    // wrapper: {
                    //     padding: 30
                    // },
                    container: {
                        paddingVertical: 15,
                        paddingHorizontal: 25,
                        alignItems: 'center',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        gap: 3,
                        height: 280,
                    }
                }}
            >
                <View style={tw`w-full`}>
                    <Text style={tw`font-bold text-xl`}>Order tracking</Text>
                    <View style={tw`flex-row justify-between items-center`}>
                        <View>
                            <Text style={tw`text-xl`}>Cameron Williamson</Text>
                            <Text style={tw`text-gray-400`}>Delivery Man</Text>
                        </View>
                        <View>
                            <Ionicons name='call' size={25} color='blue' />
                        </View>
                    </View>
                    <View style={tw`w-full border-t border-gray-400 my-2`} />
                    <View style={tw`my-2 flex-row gap-2`}>
                        <View style={tw`bg-blue-100 rounded-full p-1`}>
                            <Ionicons name='location' size={18} color='blue' />
                        </View>
                        <View>
                            <Text style={tw`text-gray-400`}>Delivery Address</Text>
                            <Text style={tw`font-bold`}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                        </View>
                    </View>
                    <View style={tw`my-2 flex-row gap-2`}>
                        <View style={tw`bg-blue-100 rounded-full p-1`}>
                            <Ionicons name='timer' size={18} color='blue' />
                        </View>
                        <View>
                            <Text style={tw`text-gray-400`}>Delivery Time</Text>
                            <Text style={tw`font-bold`}>03:00PM (Max 20 min)</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={tw`w-4/5 my-3 py-2 justify-center items-center bg-blue-600 rounded-full`}
                        onPress={() => {
                            router.navigate('/patient/home/cart/addLocation');
                        }}
                    >
                        <Text style={tw`font-bold text-white`}>{route.params.pharmacy}</Text>
                    </TouchableOpacity>
                </View>
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