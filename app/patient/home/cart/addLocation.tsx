import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'twrnc';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CustomMarker from '@/components/customMarker';
import { Link, router, useNavigation, useRouter } from 'expo-router';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const addLocation = () => {
    const [userLocation, setUserLocation] = useState<any>(null);
    const [isOpen, setOpen] = useState(false);
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

    //botoom sheet
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    useEffect(() => {
        if (bottomSheetModalRef.current) {
            bottomSheetModalRef.current.present(); // Automatically present the bottom sheet on mount
        }
    }, []);
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        // <View style={{ flex: 1 }}>
        //     <View style={styles.container}>
        //         {userLocation && (
        //             <MapView
        //                 provider={PROVIDER_GOOGLE}
        //                 style={styles.map}
        //                 initialRegion={{
        //                     // latitude: userLocation.latitude,
        //                     // longitude: userLocation.longitude,
        //                     latitude: -1.5976637,
        //                     longitude: 30.0535555,
        //                     latitudeDelta: 0.015,
        //                     longitudeDelta: 0.0121,
        //                 }}
        //             >
        //                 <Marker
        //                     coordinate={{
        //                         latitude: userLocation.latitude,
        //                         longitude: userLocation.longitude,
        //                         // latitude: -1.5986637,
        //                         // longitude: 30.0512555,
        //                     }}
        //                     title="Your Location"
        //                 />
        //             </MapView>
        //         )}
        //         <BottomSheetModalProvider>
        //                         <BottomSheetModal
        //                             ref={bottomSheetModalRef}
        //                             index={1}
        //                             snapPoints={snapPoints}
        //                             onChange={handleSheetChanges}
        //                         >
        //                             <BottomSheetView style={styles.contentContainer}>
        //                                 <Text>Awesome</Text>
        //                             </BottomSheetView>
        //                         </BottomSheetModal>
        //                 </BottomSheetModalProvider>
        //     </View>
        // </View>
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <View style={{ flex: 1 }}>
                    <View style={styles.container}>
                        {userLocation && (
                            <MapView
                                provider={PROVIDER_GOOGLE}
                                style={styles.map}
                                initialRegion={{
                                    latitude: -1.5976637,
                                    longitude: 30.0535555,
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
                    </View>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text>Awesome 🎉</Text>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
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
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default addLocation