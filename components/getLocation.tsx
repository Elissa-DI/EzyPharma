import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation, { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';

interface Location {
    latitude: number;
    longitude: number;
}

const GetLocation = () => {
    const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the user's current location
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error: GeolocationError) => setError(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      {location ? (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
}

export default GetLocation